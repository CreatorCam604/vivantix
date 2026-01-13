"use client";

import { useState } from "react";
import { contactSection } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });

  const input =
    "w-full rounded-lg border border-neutral-700/70 bg-black/50 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/60 outline-none transition";

  return (
    <section
      id={contactSection.id}
      className="min-h-[100svh] flex items-center section-fade"
    >
      <div className="w-full py-32">
        <Container>
          <SectionHeader
            title={contactSection.heading}
            description={contactSection.subheading}
            align="center"
            eyebrow="Get in touch"
          />

          <FadeIn>
            <form className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-700/60 bg-gradient-to-b from-neutral-950/70 to-black/70 px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className={input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <input
                  className={input}
                  placeholder="you@company.com"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className={input}
                  placeholder="Company name"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />
                <select
                  className={input}
                  value={form.size}
                  onChange={(e) =>
                    setForm({ ...form, size: e.target.value })
                  }
                >
                  <option value="">Company size</option>
                  <option>1–10 employees</option>
                  <option>10–50 employees</option>
                  <option>50–200 employees</option>
                  <option>200+ employees</option>
                </select>
              </div>

              <div className="mt-6">
                <textarea
                  className={`${input} min-h-[140px]`}
                  placeholder="What processes, knowledge gaps or manual work should your Company Brain handle?"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.25)] hover:opacity-95 transition"
                >
                  Request Consultation
                </button>

                <p className="mt-3 text-center text-xs text-neutral-400">
                  Free initial assessment • No obligation
                </p>
              </div>
            </form>
          </FadeIn>
        </Container>
      </div>
    </section>
  );
}
