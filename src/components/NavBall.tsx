"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function NavBar() {
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace("#", ""))
  );

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          hidden md:flex
          fixed top-6 right-8 z-[999]
          items-center gap-8
          rounded-3xl px-8 py-3
          backdrop-blur-2xl
          bg-white/5 border border-white/10
          shadow-[0_0_40px_rgba(0,200,255,0.12)]
        "
      >
        <div className="px-4 py-1 rounded-xl font-semibold tracking-wider
          bg-gradient-to-br from-cyan-400/20 to-indigo-500/20
          border border-cyan-300/30 shadow-[0_0_12px_rgba(0,200,255,0.35)]">
          VX
        </div>

        {navLinks.map((link) => {
          const id = link.href.replace("#", "");
          const active = activeSection === id;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-sm transition
                ${
                  active
                    ? "text-cyan-300"
                    : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-300
                  ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
              />
            </Link>
          );
        })}
      </motion.nav>

      {/* ================= MOBILE BUTTON ================= */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed top-6 right-6 z-[999]
          rounded-full px-4 py-2
          backdrop-blur-xl
          bg-white/5 border border-white/10
          text-sm text-white
        "
      >
        Menu
      </button>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed inset-0 z-[998]
              bg-[#030a13]/95 backdrop-blur-2xl
              flex flex-col
            "
          >
            {/* Close */}
            <div className="flex justify-between items-center px-6 py-6">
              <span className="text-sm tracking-widest text-cyan-400">VIVANTIX</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col items-center justify-center gap-8 flex-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const active = activeSection === id;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-medium transition
                      ${
                        active
                          ? "text-cyan-300"
                          : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
