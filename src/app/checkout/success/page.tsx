"use client";

import Link from "next/link";

export default function CheckoutSuccess() {
  const handleOpenApp = () => {
    window.location.href = "omnirun://checkout/success";
  };

  return (
    <div className="pt-16">
      <section className="py-24 px-6 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          {/* Success icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(45, 184, 122, 0.1)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2DB87A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-3">You&apos;re all set!</h1>
          <p className="text-gray-400 mb-8">
            Your subscription is active. You can close this tab and return to
            the omnirun app — your plan will update automatically.
            If you haven&apos;t already,{" "}
            <Link
              href="/#download"
              className="text-white underline underline-offset-2 hover:text-green-400 transition-colors"
            >
              download the app here
            </Link>
            .
          </p>

          <div>
            <button
              onClick={handleOpenApp}
              className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ background: "#2DB87A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1a9e63";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2DB87A";
              }}
            >
              Open Omnirun
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}