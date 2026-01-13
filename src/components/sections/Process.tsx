"use client";

import { processSection } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Process() {
  return (
    <section
      id={processSection.id}
      className="min-h-[100svh] flex items-center section-fade"
    >
      <div className="w-full py-32">
        <Container>
          <SectionHeader
            title={processSection.heading}
            description={processSection.subheading}
            align="center"
            eyebrow="Delivery model"
          />

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {processSection.steps.map((step, index) => (
              <FadeIn key={step.label} delay={index * 0.08}>
                <div className="relative h-full rounded-2xl border border-neutral-700/70 bg-neutral-950/70 px-6 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.85)]">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                    {step.label}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}


