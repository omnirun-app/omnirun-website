export default function Privacy() {
  return (
    <div className="pt-16">
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-12">Effective: April 13, 2026</p>

          <div className="space-y-10 text-sm text-gray-400 leading-relaxed">

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy describes how omnirun (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and protects your personal information when you use our desktop application, website (omnirun.app), and related services (collectively, the &ldquo;Service&rdquo;). This policy applies to all users of the Service, including visitors to our website, waitlist subscribers, and application users. By using the Service, you agree to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>

              <p className="mb-4">
                <span className="text-white font-medium">2.1 Information You Provide</span>
              </p>
              <p className="mb-3">
                <span className="text-white">Account Information:</span> When you create an account, we collect your email address, display name, and authentication credentials. If you sign up through a third-party provider, we receive the information authorized by that provider (such as your name and email address).
              </p>
              <p className="mb-3">
                <span className="text-white">Billing Information:</span> Payment processing is handled entirely by Stripe. We do not receive or store your credit card number or full payment details. We store your Stripe customer ID, subscription plan, billing interval, and subscription status for account management.
              </p>
              <p className="mb-3">
                <span className="text-white">Waitlist and Newsletter:</span> If you join our waitlist or subscribe to our newsletter, we collect your email address and, optionally, your preference for beta access. Waitlist subscribers are automatically enrolled in our newsletter. You can unsubscribe at any time.
              </p>
              <p className="mb-3">
                <span className="text-white">Communications:</span> When you contact us for support, provide feedback, or communicate with us, we collect the content of those communications along with your contact information.
              </p>

              <p className="mb-4 mt-6">
                <span className="text-white font-medium">2.2 Information Collected Automatically</span>
              </p>
              <p className="mb-3">
                <span className="text-white">Usage Analytics:</span> We collect anonymized usage data including features used, session duration, AI provider and model selected, token consumption, and general interaction patterns. This data helps us improve the Service and is not linked to the content of your projects or conversations.
              </p>
              <p className="mb-3">
                <span className="text-white">Device Information:</span> We collect device identifiers, operating system type and version, application version, and machine ID for the purpose of device management, license enforcement, and debugging.
              </p>
              <p className="mb-3">
                <span className="text-white">Website Data:</span> When you visit our website, we may collect IP address, browser type, referring URL, pages visited, and access timestamps through server logs.
              </p>

              <p className="mb-4 mt-6">
                <span className="text-white font-medium">2.3 Information We Do NOT Collect</span>
              </p>
              <p>
                We are committed to a local-first architecture. We do not collect, access, transmit, or store: your project files or source code; the content of your AI conversations; AI-generated outputs; your decrypted API keys; file contents on your device; screenshots captured during desktop control features (these are sent directly from your device to your AI provider and are not retained by us); or the content of emails, calendar events, or other data processed by the AI Assistant feature. For Team, Business, and Enterprise plans, project data is stored on our cloud backend to enable collaboration between team members. This includes project metadata, shared files, and team activity logs. This data is protected by row-level security, encryption in transit, and is accessible only to authorized team members.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to: provide, operate, maintain, and improve the Service; process payments and manage subscriptions; authenticate your identity and manage your account; send transactional communications (account confirmation, subscription updates, security alerts, password resets); send product updates, newsletters, and announcements (only with your consent, and you may opt out at any time); monitor and analyze usage trends to improve product quality; enforce our Terms of Service and prevent abuse, fraud, and security threats; respond to your support requests and communications; generate aggregate, anonymized analytics for internal business purposes; and comply with legal obligations and governmental requests.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Data Training Policy</h2>
              <p>
                We do not use your Content, Inputs, Outputs, project files, code, or AI conversations to train AI models, and we do not permit any third party to do so. When you use AI features, your data is sent directly from your device to your chosen AI provider using your own API keys. The AI provider&rsquo;s use of that data is governed by their own terms and privacy policies, not ours. We recommend reviewing your AI provider&rsquo;s data policies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. How We Share Your Information</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information to third parties. We do not share your personal information for cross-contextual behavioral advertising or targeted advertising. We share information only in the following circumstances:
              </p>
              <p className="mb-3">
                <span className="text-white">Service Providers:</span> We share information with third-party service providers who help us operate the Service, strictly for that purpose and subject to contractual protections. These providers are listed in Section 6.
              </p>
              <p className="mb-3">
                <span className="text-white">Legal Requirements:</span> We may disclose information when required by law, regulation, legal process, or governmental request.
              </p>
              <p className="mb-3">
                <span className="text-white">Safety and Rights:</span> We may share information when we believe it is necessary to protect the rights, property, or safety of omnirun, our users, or the public.
              </p>
              <p>
                <span className="text-white">Business Transfers:</span> In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred. We will notify you before your information becomes subject to a different privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. Third-Party Service Providers</h2>
              <p className="mb-4">We use the following third-party services to operate the Service:</p>

              <p className="mb-3">
                <span className="text-white">Supabase</span> &mdash; Authentication, database, and backend infrastructure. Your account data is stored on Supabase&rsquo;s infrastructure (hosted on AWS). Supabase does not access or use your data for its own purposes.
              </p>
              <p className="mb-3">
                <span className="text-white">Stripe</span> &mdash; Payment processing. Stripe receives and processes your payment card data directly. We never see or store your full card number.
              </p>
              <p className="mb-3">
                <span className="text-white">Resend</span> &mdash; Email delivery for transactional and marketing emails. Your email address is shared with Resend solely for the purpose of sending emails on our behalf.
              </p>
              <p className="mb-3">
                <span className="text-white">Vercel</span> &mdash; Website hosting. Standard web server logs may be collected by Vercel.
              </p>
              <p className="mb-3">
                <span className="text-white">Cloudflare</span> &mdash; DNS management and CDN. Cloudflare may process traffic data for security and performance purposes.
              </p>
              <p>
                <span className="text-white">AI Providers (Anthropic, OpenAI, etc.)</span> &mdash; When you use AI features, your Inputs are sent directly from your device to the AI provider using your own API keys. We do not route, intercept, cache, or store this data. Your relationship with your AI provider is governed by their own terms and privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">7. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including: encryption in transit (TLS/HTTPS) for all communications; encrypted storage of sensitive data; row-level security (RLS) on our database ensuring users can only access their own data; secure authentication with session management and token refresh; encrypted local storage of API keys on your device; and encryption of team shared API keys before cloud synchronization. While we take reasonable measures to protect your information, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">8. Data Retention</h2>
              <p>
                We retain your account data for as long as your account is active or as needed to provide you the Service. Anonymized usage analytics may be retained indefinitely in aggregate form. Waitlist and newsletter data is retained until you unsubscribe or request deletion. Billing records may be retained as required by applicable tax and accounting laws. If you delete your account, we will remove your personal data from our active systems within 30 days, except where retention is required by law. Local data on your device is not affected by account deletion and must be removed by you.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">9. Your Rights</h2>

              <p className="mb-4">
                <span className="text-white font-medium">9.1 Rights for All Users</span>
              </p>
              <p className="mb-3">
                Regardless of your location, you have the right to: access the personal data we hold about you; correct inaccurate or incomplete data; delete your account and associated personal data; opt out of marketing communications at any time; and request information about our data practices.
              </p>

              <p className="mb-4 mt-6">
                <span className="text-white font-medium">9.2 European Economic Area (EEA) and UK Residents</span>
              </p>
              <p className="mb-3">
                If you are in the EEA or UK, you have additional rights under the General Data Protection Regulation (GDPR), including: the right to data portability (receive your data in a structured, machine-readable format); the right to restrict processing under certain circumstances; the right to object to processing based on legitimate interests; and the right to lodge a complaint with your local data protection authority.
              </p>
              <p className="mb-3">
                Our legal bases for processing your personal data are: performance of our contract with you (providing the Service); your consent (marketing emails, waitlist, newsletter); our legitimate interests (security, fraud prevention, product improvement); and compliance with legal obligations.
              </p>

              <p className="mb-4 mt-6">
                <span className="text-white font-medium">9.3 California Residents</span>
              </p>
              <p className="mb-3">
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including: the right to know what personal information we collect and how it is used; the right to request deletion of your personal information; the right to opt out of the sale or sharing of personal information; and the right to non-discrimination for exercising your privacy rights. We do not sell or share your personal information as defined under the CCPA. We do not process sensitive personal information for purposes of inferring characteristics about you.
              </p>

              <p className="mt-6">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@omnirun.app" className="transition-colors" style={{ color: "#2DB87A" }}>
                  privacy@omnirun.app
                </a>. We will respond within 30 days, or within the timeframe required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">10. Cookies and Tracking</h2>
              <p>
                Our website uses essential cookies for authentication and session management. We do not use third-party advertising cookies, tracking pixels, or behavioral advertising technologies. We may use privacy-respecting, cookie-free analytics to understand aggregate website traffic patterns. The desktop Application does not use browser cookies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">11. International Data Transfers</h2>
              <p>
                Our service providers may process your data in jurisdictions outside your country of residence, including the United States and the European Union. When your data is transferred to countries that have not been deemed to provide an adequate level of data protection, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, to protect your data in accordance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">12. Children&rsquo;s Privacy</h2>
              <p>
                The Service is not directed at children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16 without appropriate consent, we will take steps to delete that information promptly. If you believe a child has provided us with personal data, please contact us at{" "}
                <a href="mailto:privacy@omnirun.app" className="transition-colors" style={{ color: "#2DB87A" }}>
                  privacy@omnirun.app
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we make material changes, we will update the &ldquo;Effective&rdquo; date at the top of this page and notify you via email or in-app notification. Your continued use of the Service after the effective date constitutes acceptance of the updated policy. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">14. Contact</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how we handle your data, please contact us:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@omnirun.app" className="transition-colors" style={{ color: "#2DB87A" }}>
                  privacy@omnirun.app
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}