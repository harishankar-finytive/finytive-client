


// import { motion } from "framer-motion";
// import grayBgFood from "../assets/images/aboutSec2.png";
// // You can import icons here if you use Lucide or similar, 
// // otherwise I've used subtle CSS accents below.

// export default function SelfEySection() {
//   const textVariant = {
//     hidden: { opacity: 0, y: 30 },
//     show: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.1 * i,
//         duration: 0.8,
//         ease: [0.215, 0.61, 0.355, 1],
//       },
//     }),
//   };

//   const cardHover = {
//     rest: { scale: 1 },
//     hover: { scale: 1.02, transition: { duration: 0.4 } }
//   };

//   return (
//     <section className="w-full bg-brandBg py-16 lg:py-24">
//       {/* Title Section */}
//       <div className="flex flex-col items-center text-center mb-16">
//         <motion.div
//           variants={textVariant}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="relative inline-block text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
//         >
//           About <span className="text-brandOrange">Self</span>
//           <span className="text-brandRed">-Ey</span>
//           <motion.span
//             className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-brandOrange to-brandRed rounded-full"
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1.2, delay: 0.5 }}
//           />
//         </motion.div>
//         <motion.p
//           variants={textVariant}
//           initial="hidden"
//           whileInView="show"
//           custom={1}
//           className="mt-6 text-gray-500 max-w-xl px-4"
//         >
//           Bridging the gap between home chefs, caretakers, drivers, entertainers, repair experts, and customers who value genuine, reliable service.        </motion.p>
//       </div>

//       <div className=" px-4 sm:px-6 lg:px-25 sm:py-16">
//         <div className="grid  gap-8 lg:gap-12 ">

//           {/* LEFT SIDE: ELEGANT IMAGE CARD */}
//           <motion.article
//             className="col-span-12 lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-full min-h-[500px]"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img
//               src={grayBgFood}
//               alt="About Self‑Ey"
//               className="absolute inset-0 w-270  h-130 transition-transform duration-700 group-hover:scale-110"
//             />
//             {/* Elegant Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//             {/* Glassmorphism Text Box */}
//             <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
//               <div className=" bg-white/1  border-white/20 p-6 md:p-8 ">
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                   Our Story
//                 </h2>
//                 <p className="bg-white/20 backdrop-blur-md  text-white text-sm md:text-base leading-relaxed font-light">
//                   Self-Ey is a self-employment platform built to empower local talent by connecting skills with real opportunities. We believe that every individual has unique abilities, and with the right platform, those abilities can be transformed into a sustainable source of income.                </p>
//               </div>
//             </div>
//           </motion.article>

//           {/* RIGHT SIDE: MISSION & VISION */}
//           <div className="col-span-12 lg:col-span-7 flex flex-col-2 gap-10 ">

//             {/* Vision Card */}
//             <motion.section
//               variants={textVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               custom={2}
//               className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-1"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 flex items-center justify-center text-brandOrange font-bold text-xl">
//                   V
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//                 To empower local talent by connecting skills with genuine work opportunities.
//                 To enable individuals to earn independently with dignity and trust.
//                 To build a fair, transparent platform that supports sustainable livelihoods.              </p>
//               {/* Decorative accent */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-brandOrange/5 rounded-bl-full -z-10" />
//             </motion.section>

//             {/* Mission Card */}
//             <motion.section
//               variants={textVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               custom={3}
//               className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-1"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-2xl bg-brandRed/10 flex items-center justify-center text-brandRed font-bold text-xl">
//                   M
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//                 To create strong, self-reliant local communities through meaningful work.
//                 To become a trusted ecosystem where talent and opportunity grow together.
//                 To make self-employment accessible, reliable, and rewarding for everyone.              </p>
//               {/* Decorative accent */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-brandRed/5 rounded-bl-full -z-10" />
//             </motion.section>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import grayBgFood from "../assets/images/aboutSec2.png";

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

  return (
    <section className="w-full bg-brandBg py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* 1. Title Section */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16 px-4">
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
          className="mt-6 text-gray-500 max-w-xl text-sm md:text-base px-4"
        >
          Bridging the gap between home chefs, caretakers, drivers, entertainers, repair experts, and customers who value genuine, reliable service.
        </motion.p>
      </div>

      <div className=" px-4 sm:px-6 lg:px-25">
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* 2. FIRST ROW: FULL WIDTH IMAGE CARD */}
          <motion.article
            className="relative group rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[500px] w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={grayBgFood}
              alt="About Self‑Ey"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-10">
              <div className="backdrop-blur-2  bg-cyan-500/10 border border-white/20 p-2 md:p-4 rounded-2xl ">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                  Our Story
                </h2>
                <p className="text-white/90 text-sm md:text-lg leading-relaxed font-light">
At Self-Ey, we do not fix prices for vendors. Service providers are free to set their own prices based on their skills, experience, and service quality. This open pricing model encourages healthy competition and ensures transparency for both vendors and customers.                </p>
              </div>
            </div>
          </motion.article>

          {/* 3. SECOND ROW: MISSION & VISION SIDE-BY-SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8  ">
            
            {/* Vision Card */}
            <motion.section
              variants={textVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brandOrange/10 flex items-center justify-center text-brandOrange font-bold text-2xl">
                  V
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
               To empower local talent by connecting skills with genuine work opportunities.
                To enable individuals to earn independently with dignity and trust.
                 To build a fair, transparent platform that supports sustainable livelihoods.
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandOrange/5 rounded-bl-full -z-10" />
            </motion.section>

            {/* Mission Card */}
            <motion.section
              variants={textVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brandRed/10 flex items-center justify-center text-brandRed font-bold text-2xl">
                  M
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                 To create strong, self-reliant local communities through meaningful work.
                To become a trusted ecosystem where talent and opportunity grow together.
                 To make self-employment accessible, reliable, and rewarding for everyone.
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandRed/5 rounded-bl-full -z-10" />
            </motion.section>

          </div>
        </div>
      </div>
    </section>
  );
}