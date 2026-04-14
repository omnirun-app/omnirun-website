import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, betaOptIn } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey || !resendKey) {
      console.error("Missing environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const cleanEmail = email.toLowerCase().trim();

    // ─── Insert into Supabase waitlist ─────────────────────
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email: cleanEmail,
        beta_opt_in: betaOptIn || false,
        referral_source: "website",
        status: "waiting",
      }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text();

      // Duplicate email
      if (insertRes.status === 409 || errText.includes("duplicate")) {
        return NextResponse.json(
          { error: "You're already on the waitlist!" },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", insertRes.status, errText);
      return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
    }

    // ─── Auto-subscribe to newsletter ──────────────────────
    await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email: cleanEmail,
        source: "waitlist",
      }),
    });
    // Silent — don't fail if newsletter insert fails (e.g. duplicate)

    // ─── Send confirmation email via Resend ────────────────
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "omnirun <hello@omnirun.app>",
        to: cleanEmail,
        subject: "You're on the waitlist!",
        html: getConfirmationEmail(betaOptIn),
      }),
    });

    if (!emailRes.ok) {
      console.error("Resend error:", emailRes.status, await emailRes.text());
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist signup error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// ─── Email template ──────────────────────────────────────────

function getConfirmationEmail(betaOptIn: boolean): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#2F3238; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#2F3238; padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background-color:rgba(56,60,67,0.95); border-radius:12px; border:1px solid rgba(85,91,99,0.5); padding:40px;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <img src="https://omnirun.app/logo/logo_transparent_dark.svg" alt="omnirun" width="120" style="display:block;" />
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:16px;">
              <h1 style="margin:0; font-size:24px; font-weight:600; color:#DCE0E4;">
                You're on the list!
              </h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <p style="margin:0; font-size:15px; color:#9CA3AF; line-height:1.6;">
                Thanks for joining the omnirun waitlist. We'll let you know as soon as it's ready for you.
              </p>
            </td>
          </tr>
          ${
            betaOptIn
              ? `
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <div style="background:rgba(45,184,122,0.1); border:1px solid rgba(45,184,122,0.2); border-radius:8px; padding:12px 16px;">
                <p style="margin:0; font-size:13px; color:#5DE8A0;">
                  ✓ You've opted in for early beta access. We'll reach out with an invite when spots open up.
                </p>
              </div>
            </td>
          </tr>`
              : ""
          }
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <p style="margin:0; font-size:14px; color:#9CA3AF; line-height:1.6;">
                In the meantime, join our community:
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <a href="https://omnirun.app/discord" style="display:inline-block; background:#2DB87A; color:#FFFFFF; font-size:14px; font-weight:600; text-decoration:none; padding:12px 28px; border-radius:8px;">
                Join Discord
              </a>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin:0; font-size:12px; color:#555B63;">
                omnirun — Run everything. Describe it. Done.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}