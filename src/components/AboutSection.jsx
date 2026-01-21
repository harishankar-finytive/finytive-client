// import { motion } from "framer-motion";
// import grayBgFood from "../assets/images/aboutSec.webp";

// export default function SelfEySection() {
//   const textVariant = {
//     hidden: { opacity: 0, y: 20 },
//     show: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.25 * i,
//         duration: 0.8,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     }),
//   };

//   return (
//     <section className="w-full bg-brandBg">
//       {/* Title */}
//       <div className="flex flex-col items-center text-2xl font-bold justify-center py-10">
//         <motion.span
//           className="relative pb-1"
//           variants={textVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.5 }}
//           custom={0}
//         >
//           About <span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span>
//           <motion.span
//             layoutId="underline-about"
//             className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             style={{ transformOrigin: "left" }}
//           />
//         </motion.span>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-12  gap-6  px-4 sm:px-6 lg:px-25 pb-12">
//         {/* ABOUT CARD */}
//         <article className="col-span-12 md:col-span-7 relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
//           {/* Fixed visual height to allow absolute overlay to sit at the bottom */}
//           <div className="relative h-[380px] sm:h-[440px] md:h-[520px]">
//             {/* Background image */}
//             <img
//               src={grayBgFood}
//               alt="About Self‑Ey"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//             {/* Dark legibility wash */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />

//             {/* Square overlay pinned to bottom-left of the image container */}
//             <div className="absolute bottom-4  sm:left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
//               <div className="relative w-65 h-65 sm:w-135 sm:h-64 md:w-150 rounded-xl bg-black/40 backdrop-blur-md shadow-lg ring-1 ring-white/10 text-white p-4 sm:p-5">
//                 <h2 className="text-xl sm:text-3xl font-semibold tracking-tight">
//                   About Self‑Ey
//                 </h2>
//                   <div className="mt-2 text-xs sm:text-lg leading-relaxed pr-2 overflow-hidden max-h-[12.5rem] sm:max-h-[10.5rem] md:max-h-[12rem]">
//                   <p>
//                     At Self-Ey, we believe that everyone deserves a taste of
//                     home, no matter where they are. We created this platform to
//                     connect talented homemakers with individuals living in PGs
//                     and hostels who often miss the comfort and warmth of their
//                     mom’s home-cooked meals. Self-Ey is more than just a food
//                     platform — it’s a bridge between those who love to cook and
//                     those who crave authentic homemade food.
//                   </p>
//                 </div>
//                 {/* Bottom fade */}
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl" />
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* MISSION & VISION */}
//         <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-6">

//           {/* Vision */}
//           <section className="group relative overflow-hidden border rounded-2xl p-6 ">
//             <div className="flex items-start gap-4">
              
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//                   Our Vision
//                 </h3>
//                 <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
//                   We’re not stopping at food. Self-Ey envisions expanding beyond
//                   the kitchen to onboard a diverse range of talented
//                   individuals, including embroidery designers, home tailors,
//                   caretakers, nannies, and more. Our vision is to build a
//                   community-driven platform that celebrates homemakers, nurtures
//                   their talents, and delivers the comfort of trustworthy
//                   home-based services to everyone, everywhere.
//                 </p>
//               </div>
//             </div>
//           </section>
          
//           {/* Mission */}
//           <section className="group relative overflow-hidden rounded-2xl border p-6 ">
//             <div className="flex items-start gap-4">
            
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
//                   Our Mission
//                 </h3>
//                 <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
//                   Our mission is to provide delicious, homemade food at
//                   affordable prices, while empowering homemakers to earn a
//                   steady and respectful income from their passion. By bridging
//                   the gap between home chefs and food lovers, we’re creating a
//                   win-win ecosystem where both sides benefit — that’s the
//                   Self-Ey way!{" "}
//                 </p>
//               </div>
//             </div>
//           </section>

          
//         </div>
//       </div>
//     </section>
//   );
// }




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
          className="relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
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
