"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "High stock",
    desc: "We constantly keep overstock of merchandise as our clients usually find what they need!",
    icon: "hugeicons:chart-02",
  },
  {
    title: "Fast delivery",
    desc: "Our high reliable storage facility ensures the delivery of your orders in a very short time!",
    icon: "hugeicons:flash",
  },
  {
    title: "Best quality",
    desc: "We focus to the quality of our merchandise to ensure the best quality for our clients!",
    icon: "hugeicons:star-circle",
  },
  {
    title: "Quick support",
    desc: "Our team is available via Skype or email anytime in case of need or suggestions!",
    icon: "hugeicons:customer-support",
  },
  {
    title: "Best deals",
    desc: "the best deals are designed to outshine rivals\u2014giving you maximum value at unbeatable prices",
    icon: "hugeicons:money-bag-02",
  },
  {
    title: "API orders",
    desc: "Our customers can order via API over 1000 different products, always available!",
    icon: "hugeicons:flow-connection",
  },
];

export default function ServicesCarousel() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(280);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isMobile]);

  const step = containerWidth;

  const snapTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, services.length - 1));
    setActiveIndex(clamped);
    animate(x, -clamped * step, {
      type: "spring",
      stiffness: 400,
      damping: 35,
    });
  };

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    let newIndex = activeIndex;
    if (offset < -50 || velocity < -300) {
      newIndex = activeIndex + 1;
    } else if (offset > 50 || velocity > 300) {
      newIndex = activeIndex - 1;
    }

    snapTo(newIndex);
  };

  if (isMobile === null || !isMobile) {
    return (
      <div className="grid grid-cols-3 gap-0">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center px-8 py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="w-[48px] h-[48px] bg-gray-dark rounded-[12px] flex items-center justify-center mb-[24px]">
              <Icon icon={service.icon} width={24} height={24} className="text-[#BFEB66]" />
            </div>
            <h3 className="text-white text-[24px] font-semibold leading-[28px] tracking-[-0.96px] mb-[8px]">
              {service.title}
            </h3>
            <p className="text-gray text-[14px] font-medium leading-[18px] max-w-[287px]">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: -(services.length - 1) * step,
          right: 0,
        }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center py-6 shrink-0"
            style={{ width: containerWidth }}
          >
            <div className="w-[48px] h-[48px] bg-gray-dark rounded-[12px] flex items-center justify-center mb-[24px]">
              <Icon icon={service.icon} width={24} height={24} className="text-[#BFEB66]" />
            </div>
            <h3 className="text-white text-[24px] font-semibold leading-[28px] tracking-[-0.96px] mb-[8px]">
              {service.title}
            </h3>
            <p className="text-gray text-[14px] font-medium leading-[18px] max-w-[287px]">
              {service.desc}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4 pb-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-purple-light w-[20px]" : "bg-gray-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
