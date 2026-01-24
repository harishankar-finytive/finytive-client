// import { MotionConfig, motion } from "framer-motion";
// import heroImage from "../assets/images/hero1.png";

// /* Variants */
// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.18, when: "beforeChildren" },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//   },
// };

// export default function Hero() {
//   return (
//     <MotionConfig reducedMotion="user">
//       <main className="relative overflow-hidden px-4 sm:px-6 lg:px-25 sm:pt-0 sm:py-5">
//         <section className="grid min-h-[calc(100vh-180px)] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2">
//           {/* Left */}
//           <motion.div
//             className="flex flex-col items-start justify-center"
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.35 }}
//           >
//             <motion.span
//               className="relative inline-block font-primary text-base text-brandOrange font-medium pb-1 mb-1"
//               variants={item}
//             >
//               EMPOWERING SELF-EMPLOYMENT
//               {/* underline sweep */}
//               <motion.span
//                 className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full origin-left"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true, amount: 0.6 }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//               />
//             </motion.span>

//             <motion.h1
//               className="z-10 text-4xl font-bold lg:text-5xl max-w-4xl"
//               variants={item}
//             >
//               Who We Are
//             </motion.h1>

//             <motion.p
//               className="font-primary mt-4 max-w-2xl text-lg text-gray-800/90"
//               variants={item}
//             >
//               We know that many individuals with exceptional talents remain unnoticed
//               in our society. Our platform provides them the opportunity to showcase
//               their skills and earn for themselves..
//               We’re bringing everything together under one roof to create a space
//               where talent meets opportunity
//               We started our journey by tapping into one of the most heartfelt and in-
//               demand services: Homemade Food.



//             </motion.p>
//           </motion.div>

//           {/* Right: floating image + soft blobs */}
//           <div className="sm:absolute right-10 z-10">
//             {/* cheaper-than-huge-blurs: subtle, smaller blobs */}
//             <div className="pointer-events-none absolute -right-6 top-8 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl -z-10" />
//             <div className="pointer-events-none absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-rose-300/30 blur-2xl -z-10" />

//             <div className="relative mx-auto w-full will-change-transform transform-gpu">
//               <div className=" animate-[floatY_4s_ease-in-out_infinite]">
//                 <img
//                   src={heroImage}
//                   alt="Self-Ey hero"
//                   className="sm:h-140 sm:w-140 object-cover select-none"
//                   loading="lazy"
//                   decoding="async"
//                   fetchpriority="low"
//                   width={940}
//                   height={680}
//                   style={{
//                     transform: "translateZ(0)",
//                     willChange: "transform",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         <style>{`
//         :root { --ease: cubic-bezier(0.25, 0.1, 0.25, 1); }

       
//         @keyframes floatY {
//           0% { transform: translate3d(0,0,0); }
//           50% { transform: translate3d(0,-10px,0); }
//           100% { transform: translate3d(0,0,0); }
//         }
//       `}</style>
//       </main>
//     </MotionConfig>
//   );
// }



import { MotionConfig, motion } from "framer-motion";
/* Replace your image import with your video path */
import heroVideo from "../assets/images/hero-background.mp4"; 

/* Variants */
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.18, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden px-4 sm:px-6 lg:px-25 sm:pt-0 sm:py-5">
        <section className="grid min-h-[calc(100vh-180px)] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            className="flex flex-col items-start justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.span
              className="relative inline-block font-primary text-base text-brandOrange font-medium pb-1 mb-1"
              variants={item}
            >
              EMPOWERING SELF-EMPLOYMENT
              <motion.span
                className="absolute left-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-brandOrange to-brandRed rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </motion.span>

            <motion.h1
              className="z-10 text-4xl font-bold lg:text-5xl max-w-4xl"
              variants={item}
            >
              Who We Are
            </motion.h1>

            <motion.p
              className="font-primary mt-4 max-w-2xl text-lg text-gray-800/90"
              variants={item}
            >
              We know that many individuals with exceptional talents remain unnoticed
              in our society. Our platform provides them the opportunity to showcase
              their skills and earn for themselves. We’re bringing everything together 
              under one roof to create a space where talent meets opportunity We started our journey by tapping into one of the most heartfelt and in- demand services: Homemade Food..
            </motion.p>
          </motion.div>

          {/* Right: Floating Video + soft blobs */}
          <div className="sm:absolute right-10 z-10">
            <div className="pointer-events-none absolute -right-6 top-8 h-40 w-40 rounded-full bg-amber-300/30 blur-2xl -z-10" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-rose-300/30 blur-2xl -z-10" />

            <div className="relative mx-auto w-full will-change-transform transform-gpu">
              {/* Floating Animation Wrapper */}
              <div className="animate-[floatY_4s_ease-in-out_infinite]">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="sm:h-100 sm:w-130 object-cover select-none"
                  style={{
                    transform: "translateZ(0)",
                    willChange: "transform"
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* <style>{`
          :root { --ease: cubic-bezier(0.25, 0.1, 0.25, 1); }

          @keyframes floatY {
            0% { transform: translate3d(0,0,0); }
            50% { transform: translate3d(0,-15px,0); }
            100% { transform: translate3d(0,0,0); }
          }
        `}</style> */}
      </main>
    </MotionConfig>
  );
}

