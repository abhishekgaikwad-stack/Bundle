"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about-us" className="bg-white pt-[148px] pb-0 px-6 max-md:pt-[60px]">
      <div className="max-w-[1072px] mx-auto flex flex-col h-full">
        {/* Title */}
        <motion.div
          className="flex flex-col items-center mb-[64px] max-md:mb-[40px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-black text-[48px] font-bold leading-[56px] tracking-[-2.88px] text-center max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1.5px]">
            About Us
          </h2>

          {/* Badge */}
          <div className="flex items-center gap-2 border border-gray-light rounded-full px-4 py-2 mt-[12px]">
            <span className="w-[6px] h-[6px] rounded-full bg-green" />
            <span className="text-gray text-[14px] font-medium leading-[18px]">
              Who we are and what we do
            </span>
          </div>
        </motion.div>

        {/* Two Column Text */}
        <div className="grid grid-cols-2 gap-[88px] max-md:grid-cols-1 max-md:gap-[32px] max-md:text-center pb-[120px] max-md:pb-0">
          <motion.p
            className="text-gray-dark text-[16px] font-medium leading-[22px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Bundle was established in 2021 as a retailer of computer games and has since evolved into a global wholesaler and distributor, continuously adapting its business model to match the fast changing gaming industry while achieving steady and sustainable growth. Our experience, dedication, and professionalism have helped us build a strong and diverse network of trusted suppliers across international markets, enabling us to deliver reliable solutions and maintain long term partnerships with clients worldwide.
          </motion.p>
          <motion.p
            className="text-gray-dark text-[16px] font-medium leading-[22px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Today, Bundle operates primarily as a wholesaler of computer and console games, supported by a lean and agile structure that allows us to respond quickly to industry shifts and emerging opportunities. By collaborating with external experts and maintaining operational flexibility, we ensure efficiency, scalability, and consistent service quality. This approach, combined with our commitment to innovation and reliability, has positioned Bundle as a trusted and respected partner within the global gaming ecosystem today.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="flex items-center mt-auto pt-[64px] gap-0 max-md:pt-[40px]"
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="w-[48px] h-[48px] max-md:w-[32px] max-md:h-[32px] shrink-0">
            <img src="/SVG/Left.svg" alt="" className="w-full h-full" />
          </div>
          <div className="flex-1 h-[48px] max-md:h-[32px] bg-dark" />
          <div className="w-[48px] h-[48px] max-md:w-[32px] max-md:h-[32px] shrink-0">
            <img src="/SVG/Right.svg" alt="" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
