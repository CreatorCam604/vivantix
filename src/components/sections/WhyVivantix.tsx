// src/components/sections/WhyVivantix.tsx
"use client";

import { whySection } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function WhyVivantix() {
  return (
    <div className="py-24 section-fade">
      <Container id={whySection.id}>
        <SectionHeader
          title={whySection.heading}
          description={whySection.subheading}
          align="center"
          eyebrow="Principles"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {whySection.reasons.map((reason) => (
            <FadeIn key={reason.title}>
              <div className="h-full rounded-2xl border border-neutral-700/70 bg-neutral-950/70 px-5 py-6 shadow-[0_15px_45px_rgba(0,0,0,0.9)]">
                <h3 className="mb-2 text-base font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Founder card */}
        <FadeIn delay={0.1}>
          <div className="mt-16 rounded-3xl border border-neutral-700/70 bg-neutral-950/80 px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,1)]">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/80 mb-3">
              Founder
            </p>
            <h3 className="text-xl font-semibold text-white">
              {whySection.founderCard.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-300">
              {whySection.founderCard.title}
            </p>
            <p className="mt-4 text-sm text-neutral-300 max-w-2xl mx-auto">
              {whySection.founderCard.blurb}
            </p>
            <p className="mt-4 text-xs text-neutral-400">
              {whySection.founderCard.contactLabel}
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
