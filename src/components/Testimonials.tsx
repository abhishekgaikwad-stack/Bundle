"use client";

import { TestimonialsColumn } from "./ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Bundle Limited provides unmatched reliability for our key inventories. Fast global sourcing and secure payments keep us competitive on platforms like Eneba.",
    image: "/Testimonial Brand logos/Worldofcdkeys GmbH.webp",
    name: "Worldofcdkeys GmbH",
    role: "Germany",
  },
  {
    text: "Bundle Limited has transformed our digital sourcing. Reliable supply of game keys and vouchers, plus seamless global payments - we scale effortlessly to marketplaces like G2A.",
    image: "/Testimonial Brand logos/Bamboo Electronic Cards Trading L.L.C.webp",
    name: "Bamboo Electronic Cards Trading L.L.C",
    role: "Dubai, UAE",
  },
  {
    text: "Bundle's distributor network delivers competitive pricing on codes and gift cards. Their efficient onboarding and cross-border reliability power our top-up operations worldwide.",
    image: "/Testimonial Brand logos/UniPin Limited.webp",
    name: "UniPin Limited",
    role: "Malaysia",
  },
  {
    text: "Partnering with Bundle gives us consistent access to premium digital inventories. Fast transactions and top-tier support make reselling to our global audience a breeze.",
    image: "/Testimonial Brand logos/Gamivo.com Limited.webp",
    name: "Gamivo.com Limited",
    role: "Malta",
  },
  {
    text: "Bundle Limited has streamlined our sourcing like never before. With consistent stock availability and fast global payments, we're able to stay competitive across multiple marketplaces.",
    image: "/Testimonial Brand logos/PixelForge Digital Ltd..webp",
    name: "PixelForge Digital Ltd.",
    role: "London, UK",
  },
  {
    text: "Bundle Limited delivers exactly what modern digital commerce needs—speed, reliability, and scalability. Their global supply network keeps our inventory flowing without interruptions.",
    image: "/Testimonial Brand logos/NovaKeys Trading Inc..webp",
    name: "NovaKeys Trading Inc.",
    role: "Toronto, Canada",
  },
  {
    text: "Working with Bundle has significantly improved our operations. From instant delivery to secure transactions, everything runs smoothly as we expand across international platforms.",
    image: "/Testimonial Brand logos/GameGrid Solutions Pte. Ltd..webp",
    name: "GameGrid Solutions Pte. Ltd.",
    role: "Singapore",
  },
  {
    text: "Bundle Limited provides a dependable supply of digital products with seamless payment solutions. Their efficiency allows us to scale faster and serve our customers without delays.",
    image: "/Testimonial Brand logos/CodeSphere FZCO.webp",
    name: "CodeSphere FZCO",
    role: "Dubai, UAE",
  },
  {
    text: "Bundle has become a key partner in our growth. Competitive pricing, reliable stock, and excellent support make them a standout in the digital goods ecosystem.",
    image: "/Testimonial Brand logos/PlayStack Commerce GmbH.webp",
    name: "PlayStack Commerce GmbH",
    role: "Berlin, Germany",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark pt-[100px] pb-0 px-6 max-md:pt-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-white text-[48px] font-bold leading-[56px] tracking-[-2.88px] text-center max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1.5px]">
            What our users say
          </h2>
          <p className="text-center mt-5 text-gray text-[14px] font-medium leading-[18px]">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
