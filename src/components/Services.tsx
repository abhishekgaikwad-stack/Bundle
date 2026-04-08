"use client";

import { motion } from "motion/react";
import ServicesCarousel from "./ServicesCarousel";

export default function Services() {
  return (
    <div id="services" className="relative z-20 -mt-[180px] mb-0 max-md:-mt-[100px]">
      <motion.div
        className="mx-auto max-w-[1102px] px-6 max-md:px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-dark-card rounded-[24px] p-[24px] max-md:p-4">
          <ServicesCarousel />
        </div>
      </motion.div>
    </div>
  );
}
