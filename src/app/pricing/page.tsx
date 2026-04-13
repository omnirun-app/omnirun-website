"use client";

import { useState } from "react";
import PricingCards from "@/components/PricingCards";
import WaitlistModal from "@/components/WaitlistModal";

export default function Pricing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              All plans are BYOK — you bring your own API keys and pay providers
              directly. No markup, full transparency.
            </p>
          </div>

          <PricingCards onCtaClick={() => setShowModal(true)} />
        </div>
      </section>

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}