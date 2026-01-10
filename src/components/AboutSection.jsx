import { motion } from "framer-motion";
import grayBgFood from "../assets/images/aboutSec.webp";

export default function SelfEySection() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25 * i,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="w-full bg-brandBg">
      {/* Title */}
      <div className="flex flex-col items-center text-2xl font-bold justify-center py-10">
        <motion.span
          className="relative pb-1"
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          About <span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span>
          <motion.span
            layoutId="underline-about"
            className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12  gap-6 mx-auto px-4 sm:px-6 lg:px-25 pb-12">
        {/* ABOUT CARD */}
        <article className="col-span-12 md:col-span-7 relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
          {/* Fixed visual height to allow absolute overlay to sit at the bottom */}
          <div className="relative h-[380px] sm:h-[440px] md:h-[520px]">
            {/* Background image */}
            <img
              src={grayBgFood}
              alt="About Self‑Ey"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark legibility wash */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent" />

            {/* Square overlay pinned to bottom-left of the image container */}
            <div className="absolute bottom-4  sm:left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
              <div className="relative w-65 h-65 sm:w-135 sm:h-64 md:w-150 rounded-xl bg-black/40 backdrop-blur-md shadow-lg ring-1 ring-white/10 text-white p-4 sm:p-5">
                <h2 className="text-xl sm:text-3xl font-semibold tracking-tight">
                  About Self‑Ey
                </h2>
                <div className="mt-2 text-xs sm:text-lg leading-relaxed pr-2 overflow-hidden max-h-[12.5rem] sm:max-h-[10.5rem] md:max-h-[12rem]">
                  <p>
                    At Self-Ey, we believe that everyone deserves a taste of
                    home, no matter where they are. We created this platform to
                    connect talented homemakers with individuals living in PGs
                    and hostels who often miss the comfort and warmth of their
                    mom’s home-cooked meals. Self-Ey is more than just a food
                    platform — it’s a bridge between those who love to cook and
                    those who crave authentic homemade food.
                  </p>
                </div>
                {/* Bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl" />
              </div>
            </div>
          </div>
        </article>

        {/* MISSION & VISION */}
        <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-6">

          {/* Vision */}
          <section className="group relative overflow-hidden border rounded-2xl p-6 ">
            <div className="flex items-start gap-4">
              {/* <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-gray-900/80" aria-hidden="true">
                  <path d="M12 3c5.177 0 9.39 3.52 10.8 8.25a1 1 0 0 1 0 .5C21.39 16.48 17.177 20 12 20S2.61 16.48 1.2 11.75a1 1 0 0 1 0-.5C2.61 6.52 6.823 3 12 3Zm0 2c-4.01 0-7.49 2.66-8.77 6.75C4.51 15.84 7.99 18.5 12 18.5s7.49-2.66 8.77-6.75C19.49 7.66 16.01 5 12 5Zm0 2.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>
              </div> */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Our Vision
                </h3>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
                  We’re not stopping at food. Self-Ey envisions expanding beyond
                  the kitchen to onboard a diverse range of talented
                  individuals, including embroidery designers, home tailors,
                  caretakers, nannies, and more. Our vision is to build a
                  community-driven platform that celebrates homemakers, nurtures
                  their talents, and delivers the comfort of trustworthy
                  home-based services to everyone, everywhere.
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission */}
          <section className="group relative overflow-hidden rounded-2xl border p-6 ">
            <div className="flex items-start gap-4">
              {/* <div className="mt-1 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-gray-900/80" aria-hidden="true">
                  <path d="M12 2a1 1 0 0 1 1 1v1.055a8.004 8.004 0 0 1 6.945 6.945H21a1 1 0 1 1 0 2h-1.055A8.004 8.004 0 0 1 13 19.945V21a1 1 0 1 1-2 0v-1.055A8.004 8.004 0 0 1 4.055 13H3a1 1 0 1 1 0-2h1.055A8.004 8.004 0 0 1 11 4.055V3a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 2.25a.75.75 0 0 1 .75.75v2.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2-2A.75.75 0 0 1 11.25 12V9a.75.75 0 0 1 .75-.75Z" />
                </svg>
              </div> */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Our Mission
                </h3>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-700">
                  Our mission is to provide delicious, homemade food at
                  affordable prices, while empowering homemakers to earn a
                  steady and respectful income from their passion. By bridging
                  the gap between home chefs and food lovers, we’re creating a
                  win-win ecosystem where both sides benefit — that’s the
                  Self-Ey way!{" "}
                </p>
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </section>
  );
}
