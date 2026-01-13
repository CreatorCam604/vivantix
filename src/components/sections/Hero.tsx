"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/Container";
import { heroSection } from "@/content/site";

export default function Hero() {
  return (
    <section
      id={heroSection.id}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="w-full py-32">
        <Container className="relative flex flex-col gap-14 lg:flex-row lg:items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-6 inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/5 px-4 py-1 text-[11px] font-semibold tracking-[0.28em] text-cyan-300 uppercase"
            >
              {heroSection.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-neutral-50"
            >
              The AI brain
              <br />
              behind modern
              <br />
              businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 max-w-xl text-sm sm:text-base text-neutral-300/90"
            >
              {heroSection.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href={heroSection.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-3 text-sm font-medium text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.45)] hover:from-cyan-300 hover:to-sky-400 transition"
              >
                {heroSection.primaryCta.label}
              </a>
              <a
                href={heroSection.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-neutral-700/80 bg-black/60 px-7 py-3 text-sm font-medium text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900/80 transition"
              >
                {heroSection.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          {/* Engine Card */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.18, type: "spring", stiffness: 120, damping: 18 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-[42px] border border-neutral-700/70 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950/40 px-8 py-10 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[42px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.25),transparent_55%)]" />

              <motion.div
                className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-[32px] border border-cyan-400/30 bg-gradient-to-b from-slate-900 to-black shadow-[0_0_55px_rgba(34,211,238,0.4)]"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(34,211,238,0.35)",
                    "0 0 60px rgba(139,92,246,0.45)",
                    "0 0 40px rgba(34,211,238,0.35)",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
              >
                <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[22px] bg-black/95">
                  <Image
                    src="/vivantix-logo.png"
                    alt="Vivantix logo"
                    width={200}
                    height={200}
                    className="h-32 w-auto object-contain"
                    priority
                  />
                </div>
              </motion.div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-neutral-400/90">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Systems online
                </span>
                <span className="text-neutral-500">Vivantix Engine • v1.0</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
