// ComparisonAnimated.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const struggles = [
  "Repetitive, bland mess/canteen food.",
  "No customization: spice, oil, or portions.",
  "Hygiene doubts & shared kitchens.",
  "Fixed timings; late shifts = skipped meals.",
  "Health issues: acidity, fatigue, weight swings.",
  "Daily ordering is expensive with hidden fees.",
  "Homesick cravings unmet (amma-style dishes).",
  "Inconsistent service: delays/cancellations.",
];

const advantages = [
  "Home-cooked taste from verified homemakers.",
  "Made your way: spice, oil, portions, diet.",
  "Trusted & clean: profiles, checks, reviews.",
  "Flexible plans: daily/weekly/monthly, pause/skip.",
  "On-time slots to match classes & shifts.",
  "Pocket-friendly, transparent pricing & combos.",
  "Seasonal & regional comfort menus.",
  "Empowers women entrepreneurs",
];

// Variants
const colContainer = (delay = 0) => ({
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.08, // line-by-line
    },
  },
});

const line = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

function XIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-red-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"/>
    </svg>
  );
}

export default function ComparisonAnimated() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="comparison" className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-25 py-14 sm:py-16">
        {/* Heading (animated once) */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Hostel/PG Struggles vs <span className="text-brandOrange">Self<span className="text-brandRed">-Ey</span></span> Advantages
          
            <motion.span
            layoutId="underline-compare"
            className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
            {/* <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-brandOrange/90" /> */}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-gray-700">
            See how Self-Ey turns everyday pain points into simple, homely solutions.
          </p>
        </motion.div>

        {/* Two-column comparison */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Struggles */}
          <motion.article
            className="rounded-2xl border border-red-100 bg-red-50/50 p-5 sm:p-6"
            variants={prefersReduced ? undefined : colContainer(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                <XIcon />
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Struggle</h3>
            </div>

            <ul className="mt-4 space-y-3 text-base sm:text-lg text-gray-800">
              {struggles.map((item) => (
                <motion.li key={item} className="flex items-start gap-2" variants={prefersReduced ? undefined : line}>
                  <span className="mt-1">
                    <svg className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {/* Advantages */}
          <motion.article
            className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6"
            variants={prefersReduced ? undefined : colContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                <CheckIcon />
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">The Self-Ey Advantage</h3>
            </div>

            <ul className="mt-4 space-y-3 text-base sm:text-lg text-gray-800">
              {advantages.map((item) => (
                <motion.li key={item} className="flex items-start gap-2" variants={prefersReduced ? undefined : line}>
                  <span className="mt-1">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* CTA (fade in) */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
          to={"contact-us"}
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-brandOrange px-4 py-2.5 text-base font-semibold text-white transition hover:opacity-90"
          >
            Join as Homemaker
          </Link>
          {/* <a
            href="#join"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Explore meal plans
            
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
