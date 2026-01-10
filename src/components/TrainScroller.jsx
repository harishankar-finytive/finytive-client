import React, { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Reusable Train Scroller Template
 * @param {Array} items - Array of strings or objects to display in cars
 * @param {string} title - Main section heading
 * @param {string} subtitle - Subtext below heading
 * @param {string} stationName - Text for the yellow station board
 * @param {number} speedSeconds - How long one full pass takes
 */
export default function TrainScroller({
  items = [],
  title = "Our Categories",
  subtitle = "Organized for you",
  stationName = "Main Junction",
  speedSeconds = 20,
}) {
  // Calculate dynamic width to ensure the train completes its journey
  // Compartment width (208px) + Gap (12px) + Locomotive/Caboose room
  const trainLength = useMemo(() => (items.length * 220) + 600, [items]);

  const fade = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-amber-50/20 to-amber-100 py-16">
      {/* Header Section */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.h2
          className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fade}
        >
          {title}
          <motion.span
            className="absolute left-0 bottom-0 h-[3px] w-full bg-red-600 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>
        <p className="mt-2 text-stone-600">{subtitle}</p>
        <StationBoard label={stationName} />
      </div>

      {/* Animation Track Area */}
      <div className="relative mx-auto mt-12 h-44 w-full">
        {/* Tracks */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-stone-200/50" aria-hidden />
        <div className="absolute bottom-6 left-0 right-0 flex justify-between px-1 opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="h-3 w-8 bg-stone-600" />
          ))}
        </div>
        <div className="absolute bottom-8 left-0 right-0 h-2 bg-stone-800" aria-hidden />
        <div className="absolute bottom-4 left-0 right-0 h-2 bg-stone-800" aria-hidden />

        {/* The Moving Train */}
        <div
          className="absolute left-0 bottom-8 z-30"
          style={{
            // Dynamic animation using the calculated train length
            animation: `travel ${speedSeconds}s linear infinite`,
            "--end-pos": `-${trainLength}px` 
          }}
        >
          <div className="flex h-32 items-end">
            <div className="-scale-x-100 transform"><Locomotive /></div>
            <div className="flex items-end">
              {items.map((label, idx) => (
                <Compartment key={idx} label={label} />
              ))}
              <Caboose />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes travel {
          from { transform: translateX(100vw); }
          to { transform: translateX(var(--end-pos)); }
        }
        @keyframes spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes puff { 
            0% { transform: translate(0,0) scale(0.6); opacity: 0.9;} 
            100% { transform: translate(-100px,-80px) scale(1.4); opacity:0;} 
        }
      `}</style>
    </section>
  );
}

// Sub-components (Locomotive, Compartment, Caboose, OldWheel, StationBoard) 
// remain largely the same but ensure they use standard Tailwind colors 
// unless your tailwind.config.js has "brandOrange" and "brandRed" defined.

function Compartment({ label }) {
    return (
      <div className="relative mr-3 h-28 w-52 flex-shrink-0 rounded-lg border border-stone-600/50 bg-orange-100 shadow">
        <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
        <div className="absolute inset-x-2 top-5 h-14 rounded-md bg-orange-50/90 flex items-center justify-center px-2 text-center ring-1 ring-orange-300">
          <span className="text-sm font-semibold text-stone-800 leading-tight">{label}</span>
        </div>
        <div className="absolute bottom-4 left-2 right-2 h-2 rounded bg-stone-700" />
        <div className="absolute left-7 bottom-[-10px] flex gap-10">
          <OldWheel /><OldWheel />
        </div>
      </div>
    );
}

function Locomotive() {
    return (
      <div className="relative mr-4 h-28 w-56 rounded-lg bg-stone-800 shadow-lg flex-shrink-0">
        <div className="absolute bottom-10 left-4 right-10 h-12 rounded-full bg-stone-700" />
        <div className="absolute right-8 -top-3 h-10 w-6 rounded-t-md bg-stone-900" />
        <div className="smoke pointer-events-none absolute -top-8 right-7">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="absolute block h-6 w-6 rounded-full bg-stone-400/60 blur-sm"
              style={{ animation: `puff 3s ease-out ${i * 0.8}s infinite` }} />
          ))}
        </div>
        <div className="absolute left-6 -bottom-2 flex gap-10">
          <OldWheel large /><OldWheel large />
        </div>
      </div>
    );
}

function Caboose() {
    return (
      <div className="relative ml-1 h-28 w-44 rounded-lg border border-stone-600/50 bg-red-100 shadow flex-shrink-0">
        <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
        <div className="absolute inset-0 flex items-center justify-center pt-4 font-bold text-red-800 text-xs">END</div>
        <div className="absolute left-7 bottom-[-10px] flex gap-10">
          <OldWheel /><OldWheel />
        </div>
      </div>
    );
}

function OldWheel({ large = false }) {
    return (
      <div className={`rounded-full border-4 border-stone-700 bg-stone-900 ${large ? "h-9 w-9" : "h-7 w-7"}`}
           style={{ animation: `spin-cw 2s linear infinite` }}>
        <div className="h-full w-full relative flex items-center justify-center">
            <div className="absolute w-full h-0.5 bg-stone-600 rotate-45" />
            <div className="absolute w-full h-0.5 bg-stone-600 -rotate-45" />
                  <div className="absolute h-0.5 w-5 rotate-45 bg-stone-400" />
      <div className="absolute h-0.5 w-5 -rotate-45 bg-stone-400" />
      <div className="absolute h-0.5 w-3 rotate-90 bg-stone-400" />
      <div className="absolute h-0.5 w-3 bg-stone-400" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 shadow-inner" />

        </div>
      </div>
    );
}

function StationBoard({ label }) {
    return (
      <div className="mt-4 inline-block rounded-md border-4 border-stone-700 bg-amber-200 px-6 py-2 shadow-md">
        <div className="text-lg font-black uppercase text-stone-900">{label}</div>
      </div>
    );
}