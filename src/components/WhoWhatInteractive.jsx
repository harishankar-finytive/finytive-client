// WhoWhatInteractive.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Interactive, performance-friendly "What We Do" & "Who We Are" section.
 * - Tab switch with animated underline + smooth content transitions
 * - Line-by-line bullet reveal on enter
 * - Small stat cards with hover lift
 * - Fully responsive, keyboard accessible
 *
 * Usage:
 * <WhoWhatInteractive />
 */

const TABS = [
  {
    key: "what",
    label: "Our Identity",
    tagline: "A community of doers, built on trust.",
    bullets: [
      "Mission-first team focused on self-empowerment and livelihood at scale.",
      "Champions of homemakers and independent professionals—giving them a real marketplace.",
      "Obsessed with authenticity, hygiene, and reliable service—every time.",
      "Growing beyond food to welcome diverse skills and meaningful micro-entrepreneurs.",
    ],
    paragraph:
      "We’re a mission-driven team building a trusted community where homemakers and local professionals become micro-entrepreneurs. Rooted in authenticity and hygiene, we make it easy to showcase skills, earn fairly, and serve people who value genuine, heartfelt work.",
  },
  {
    key: "who",
    label: "Our Impact",
    tagline: "Home-grown skills. Real opportunities.",
    bullets: [
      "Connect people who miss “home” with verified home chefs and local service talent.",
      "Make discovery simple with transparent pricing, reviews, and secure booking.",
      "Empower women homemakers and independent workers to turn skills into steady income.",
      "Ensure quality with verification, hygiene guidance, and real feedback loops.",
    ],
    paragraph:
      "We connect people who miss the warmth of home with trusted home chefs and nearby service talent. From homely meals to everyday help, Self-Ey keeps things simple and transparent—while enabling skilled individuals to earn with dignity and consistency.",
  },
];

const line = {
  hidden: { opacity: 0, y: 8 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function CheckIcon({ className = "h-5 w-5 text-emerald-600" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
    </svg>
  );
}

export default function WhoWhatInteractive() {
  const [active, setActive] = useState("what");
  const activeTab = TABS.find((t) => t.key === active);

  return (
    <section id="who-what" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-14 sm:py-16">
        {/* Head */}
        <div className="text-center">
          <h2 className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Who We Are & What We Do
            {/* <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-brandOrange/90" /> */}
            <motion.span
              layoutId="underline-whos"
              className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg sm:text-lg text-gray-700">
            Explore our mission and the value we create—for customers and
            creators alike.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left: Tabs + content */}
          <div className="lg:col-span-5">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Who we are and What we do"
              className="relative inline-flex rounded-xl border border-gray-200 bg-white p-1"
            >
              {TABS.map((t) => {
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${t.key}`}
                    id={`tab-${t.key}`}
                    onClick={() => setActive(t.key)}
                    className={`relative z-10 rounded-lg px-4 py-2 text-lg font-semibold transition ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {t.label}
                    {/* active pill underline */}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-lg bg-gray-100 ring-1 ring-black/5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div className="mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.key}
                  role="tabpanel"
                  id={`panel-${activeTab.key}`}
                  aria-labelledby={`tab-${activeTab.key}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg font-medium uppercase tracking-wide text-brandOrange">
                    {activeTab.tagline}
                  </p>

                  {/* Bullets animated line-by-line */}
                  <ul className="mt-4 space-y-3 ">
                    {activeTab.bullets.map((b, i) => (
                      <motion.li
                        key={b}
                        custom={i}
                        variants={line}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex items-start gap-3 text-lg leading-relaxed text-gray-800"
                      >
                        <span className="mt-0.5">
                          <CheckIcon />
                        </span>
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <p className="mt-5 text-lg leading-relaxed text-gray-700">
                    {activeTab.paragraph}
                  </p>

                  {/* CTA row */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {active === "what" ? (
                      <>
                        <Link
                          to={"/contact-us"}
                          className="inline-flex items-center justify-center rounded-lg bg-brandOrange px-4 py-2.5 text-lg font-semibold text-white transition hover:opacity-90"
                        >
                          Talk to us
                        </Link>
                      
                        {/* <span
                          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-lg font-semibold text-gray-900 transition hover:bg-gray-50"
                        >
                          Explore services
                          
                        </span> */}
                       
                      </>
                    ) : (
                      <>
                        <Link
                          to={"/contact-us"}
                          className="inline-flex items-center justify-center rounded-lg bg-brandOrange px-4 py-2.5 text-lg font-semibold text-white transition hover:opacity-90"
                        >
                          Join as Partner
                        </Link>
                        {/* <a
                          href="#about"
                          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-lg font-semibold text-gray-900 transition hover:bg-gray-50"
                        >
                          Learn more
                        </a> */}
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Stats / Proof (interactive hover) */}
          {/* <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { k: "trust", title: "Verified Profiles", text: "Reviews, hygiene guidance, and clear policies.", accent: "from-emerald-50 to-transparent" },
              { k: "custom", title: "Made Your Way", text: "Spice, oil, portions, and dietary preferences.", accent: "from-orange-50 to-transparent" },
              { k: "fair", title: "Fair Earnings", text: "Empowers women entrepreneurs with on-time payouts.", accent: "from-rose-50 to-transparent" },
              { k: "simple", title: "Simple Booking", text: "Transparent pricing and secure checkout.", accent: "from-indigo-50 to-transparent" },
            ].map((card) => (
              <motion.article
                key={card.k}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent}`} />
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">{card.text}</p>
              </motion.article>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
