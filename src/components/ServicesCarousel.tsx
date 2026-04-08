"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    title: "High stock",
    desc: "We constantly keep overstock of merchandise as our clients usually find what they need!",
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
  },
  {
    title: "Fast delivery",
    desc: "Our high reliable storage facility ensures the delivery of your orders in a very short time!",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: "Best quality",
    desc: "We focus to the quality of our merchandise to ensure the best quality for our clients!",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    title: "Quick support",
    desc: "Our team is available via Skype or email anytime in case of need or suggestions!",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    title: "Best deals",
    desc: "the best deals are designed to outshine rivals\u2014giving you maximum value at unbeatable prices",
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    title: "API orders",
    desc: "Our customers can order via API over 1000 different products, always available!",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {service.icon}
              </svg>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {service.icon}
              </svg>
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
