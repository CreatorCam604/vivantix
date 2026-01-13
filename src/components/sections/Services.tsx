"use client";

import { servicesSection } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id={servicesSection.id}
      className="min-h-[100svh] flex items-center section-fade"
    >
      <div className="w-full py-32">
        <Container>
          <SectionHeader
            title={servicesSection.heading}
            description={servicesSection.subheading}
            align="center"
            eyebrow="Capabilities"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {servicesSection.items.map((service) => (
              <FadeIn key={service.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative h-full rounded-2xl border border-neutral-700/70 bg-gradient-to-b from-neutral-900/70 via-black/70 to-neutral-950/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.9)]"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-300 mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-sm text-neutral-200">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
