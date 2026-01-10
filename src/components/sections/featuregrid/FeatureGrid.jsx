import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { fadeUp } from "./motionConfig";

const FeatureGrid = ({
  sectionId = "features",
  heading,
  bgImage,
  items = []
}) => {
  return (
    <section id={sectionId} className="relative w-full">
      
      {/* Background */}
      {bgImage && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/60 backdrop-blur-[1px]" />

      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-14 sm:py-16">
        
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.h2
            className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
          >
            {heading}
            <motion.span
              className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, index) => (
            <FeatureCard
              key={item.title}
              index={index}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
