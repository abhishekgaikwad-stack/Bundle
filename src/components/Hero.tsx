"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative bg-dark overflow-hidden">
      {/* Background Image with Parallax - Desktop */}
      <motion.div
        className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat pointer-events-none max-md:hidden"
        style={{
          backgroundImage: "url('/Homepage Bg/HeroBg.webp')",
          y: bgY,
        }}
      />
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat pointer-events-none hidden max-md:block"
        style={{ backgroundImage: "url('/Homepage Bg/HeroBgMobile.webp')" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center pt-[232px] pb-[40px] px-6 max-md:pt-[160px]"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Badge */}
        <div className="bg-white/10 rounded-full px-4 py-2">
          <span className="text-purple-light text-[16px] font-semibold leading-[20px]">
            One word
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-[48px] font-bold text-center leading-[56px] tracking-[-2.88px] mt-[24px] max-w-[666px] max-md:text-[36px] max-md:leading-[40px] max-md:tracking-[-1.5px]">
          Everything you need to play. Anywhere in the world. Bundle.
        </h1>

        {/* Subtitle */}
        <p className="text-white text-[14px] font-medium leading-[18px] text-center mt-[24px] max-w-[666px]">
          Deploy once, and it handles your daily tasks around the clock, even while you sleep.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:business@bundlehk.com"
          className="mt-[24px] bg-white text-purple font-semibold text-[16px] leading-[18px] px-6 py-[14px] rounded-[8px] hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </motion.div>

      {/* Bottom spacer for services overlap */}
      <div className="h-[280px] max-md:h-[160px]" />
    </section>
  );
}
