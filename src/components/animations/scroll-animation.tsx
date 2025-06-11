"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "slideFromLeft" | "slideFromRight" | "scale";
}

export function ScrollAnimation({
  children,
  className,
  duration = 0.5,
  delay = 0,
  variant = "fadeUp",
}: ScrollAnimationProps) {
  // 애니메이션 변형 정의
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideFromLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideFromRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // 부드러운 이징
      }}
    >
      {children}
    </motion.div>
  );
}

interface SequentialAnimationProps {
  children: React.ReactNode[];
  className?: string;
  containerClassName?: string;
  delay?: number;
  staggerDelay?: number;
  variant?: "fadeUp" | "fadeIn" | "slideFromLeft" | "slideFromRight" | "scale";
}

export function SequentialAnimation({
  children,
  className,
  containerClassName,
  delay = 0.1,
  staggerDelay = 0.1,
  variant = "fadeUp",
}: SequentialAnimationProps) {
  // 애니메이션 변형 정의
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideFromLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideFromRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }[variant];

  return (
    <motion.div
      className={containerClassName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          className={className}
          variants={childVariants}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
