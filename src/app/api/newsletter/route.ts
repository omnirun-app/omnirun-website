import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const cleanEmail = email.toLowerCase().trim();

    const insertRes = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email: cleanEmail,
        source: "website",
      }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text();

      if (insertRes.status === 409 || errText.includes("duplicate")) {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", insertRes.status, errText);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}