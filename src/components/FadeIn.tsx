// src/components/FadeIn.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  distance = 12,
  direction = "up",
  once = true,
  amount = 0.55,
}: Props) {
  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "down"
      ? { y: -distance }
      : direction === "left"
      ? { x: distance }
      : direction === "right"
      ? { x: -distance }
      : {};

  const variants: Variants = {
    hidden: { opacity: 0, ...offset, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
