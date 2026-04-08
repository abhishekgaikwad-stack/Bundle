"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-footer py-[24px] px-6">
      <motion.div
        className="max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <p className="text-white text-[16px] font-medium leading-[22px] text-center">
          Copyright &copy;2026 All Rights Reserved By Bundle Limited
          <br />
          Unit 2A, Floor 17, Glenealy Tower, No. 1 Gleanealy Central, Central District, Hong Kong
        </p>
      </motion.div>
    </footer>
  );
}
