import React from "react";
import { motion } from "framer-motion";
import bgFood from '../assets/images/bgFood.png'

const items = [
  { title: "Be Your Own Boss", text: "Own your time, choose your work, and grow on your terms." },
  { title: "Turn Skills into Income", text: "Cook, stitch, care, design — convert your talent into steady earnings." },
  { title: "Trusted & Transparent", text: "Verified profiles, clear reviews, and secure bookings build real trust." },
  { title: "Local, Nearby, Reliable", text: "Find (or become) a trusted talent right around the corner." },
  { title: "Fair & Flexible", text: "Set fair prices, accept jobs you like, and balance life with work." },
  { title: "Grow with Support", text: "Get tools, tips, and a community that helps you scale your journey." },
];

export default function WhySelfEyGrid({ bgImage }) {
  const fade = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section id="why-selfey" className="relative w-full">
      {/* Static background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgFood})` }}
      />
      {/* Soft overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/60 backdrop-blur-[1px]" />

      <div className="mx-auto  px-4 sm:px-6 lg:px-25 py-14 sm:py-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fade}
          >
            Why Self-E
            {/* <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-brandOrange/90" /> */}
           <motion.span
            layoutId="underline-why"
            className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
          </motion.h2>
          {/* <p className="mt-3 text-sm sm:text-base text-gray-700">
            Six reasons our platform helps you thrive.
          </p> */}
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              className="rounded-2xl border border-black/5 bg-white/80 backdrop-blur-xl shadow-xl p-5 sm:p-6"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fade}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">{it.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
