


import { motion } from "framer-motion";
import grayBgFood from "../assets/images/aboutSec.webp";
// You can import icons here if you use Lucide or similar, 
// otherwise I've used subtle CSS accents below.

export default function SelfEySection() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.4 } }
  };

  return (
    <section className="w-full bg-brandBg py-16 lg:py-24">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative inline-block text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          About <span className="text-brandOrange">Self</span>
          <span className="text-brandRed">-Ey</span>
          <motion.span
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-brandOrange to-brandRed rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </motion.div>
        <motion.p 
          variants={textVariant} 
          initial="hidden" 
          whileInView="show" 
          custom={1}
          className="mt-6 text-gray-500 max-w-xl px-4"
        >
          Bridging the gap between talented home chefs and those seeking the warmth of a home-cooked meal.
        </motion.p>
      </div>

      <div className=" px-4 sm:px-6 lg:px-25 sm:py-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: ELEGANT IMAGE CARD */}
          <motion.article 
            className="col-span-12 lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-full min-h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={grayBgFood}
              alt="About Self‑Ey"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Glassmorphism Text Box */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Story
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                  At Self-Ey, we believe everyone deserves a taste of home. We connect talented homemakers with individuals who miss the comfort of their mom’s kitchen. More than a platform, it’s a community-driven bridge built on authenticity and love.
                </p>
              </div>
            </div>
          </motion.article>

          {/* RIGHT SIDE: MISSION & VISION */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
            
            {/* Vision Card */}
            <motion.section 
              variants={textVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 flex items-center justify-center text-brandOrange font-bold text-xl">
                  V
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                We’re expanding beyond the kitchen. We envision a community-driven platform that celebrates homemakers—from tailors to caretakers—delivering trustworthy home-based services to everyone, everywhere.
              </p>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandOrange/5 rounded-bl-full -z-10" />
            </motion.section>

            {/* Mission Card */}
            <motion.section 
              variants={textVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brandRed/10 flex items-center justify-center text-brandRed font-bold text-xl">
                  M
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To empower homemakers with a respectful income while providing food lovers with affordable, homemade meals. We are building a win-win ecosystem where passion meets purpose—that’s the Self-Ey way.
              </p>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandRed/5 rounded-bl-full -z-10" />
            </motion.section>

          </div>
        </div>
      </div>
    </section>
  );
}
