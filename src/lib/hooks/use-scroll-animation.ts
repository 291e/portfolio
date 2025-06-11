"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return { ref, isInView };
}

export function useSequentialAnimation(threshold = 0.1, delay = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  return { ref, isInView, childVariants };
}
