import React from "react";
import { motion } from "framer-motion";

export default function TrainFoodSection({
  title = "Self-Ey Food Categories",
  subtitle = "Authentic home cooking, organized for you.",
  items = [
    "Jains food",
    "Brahmin food",
    "Punjabi food",
    "Rajasthani food",
    "Kerala food",
    "Karnataka food",
    "Andhra Food"
  ], 
  speedSeconds = 18,
}) {

  const fade = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-amber-50/20 to-amber-100 py-16">
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        {/* <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 md:text-4xl">
          {title}
        </h2> */}
        <motion.h2
            className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={fade}
          >
          <span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span> Food Categories
            {/* <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-brandOrange/90" /> */}
           <motion.span
            layoutId="underline-train"
            className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
          </motion.h2>
        <p className="mt-2 text-stone-600">{subtitle}</p>
        <StationBoard label="Self-Ey Junction" tagline="Superfast Express" />
      </div>

      <div className="relative mx-auto mt-12 h-44 w-[1400px] max-w-none md:w-[1800px]">
        <div
          className="absolute bottom-0 left-0 right-0 h-12 bg-amber-900/50"
          aria-hidden
        />
        <div
          className="absolute bottom-6  left-0 right-0 flex justify-between px-1"
          aria-hidden
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="h-3 w-8 bg-stone-600/70" />
          ))}
        </div>
        <div
          className="absolute bottom-8 left-0 right-0 h-2 bg-stone-800"
          aria-hidden
        />
        <div
          className="absolute bottom-4 left-0 right-0 h-2 bg-stone-800"
          aria-hidden
        />

        <div
          className="absolute left-0 bottom-8 z-30"
          style={{
            animation: `travel var(--spd, ${speedSeconds}s) linear infinite`,
          }}
        >
          <Train items={items} />
        </div>
      </div>

      <style>{`
        @keyframes travel {
          from { transform: translateX(100vw); }
          to { transform: translateX(-1400px); }
        }
       @keyframes spin-cw   { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
       @keyframes spin-ccw  { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes puff { 0% { transform: translate(0,0) scale(0.6); opacity: 0.9;} 70%{opacity:0.5;} 100%{transform:translate(-140px,-90px) scale(1.4); opacity:0;} }
      `}</style>
    </section>
  );
}

function Train({ items }) {
  return (
    <div className="flex h-32 items-end">
      <div className="-scale-x-100 transform">
        <Locomotive />
      </div>
      <div className="flex items-end">
        {items.map((label, idx) => (
          <Compartment key={idx} label={label} />
        ))}
        <Caboose />
      </div>
    </div>
  );
}

function Locomotive() {
  return (
    <div className="relative mr-4 h-28 w-56 rounded-lg bg-stone-800 shadow-lg">
      <div className="absolute bottom-10 left-4 right-10 h-12 rounded-full bg-stone-700" />
      <div className="absolute left-20 bottom-20 h-7 w-7 rounded-full bg-stone-600 ring-2 ring-stone-700" />
      <div className="absolute left-2 bottom-14 h-14 w-20 rounded-md bg-stone-900" />
      <div className="absolute left-4 bottom-[4.5rem] h-6 w-9 rounded-sm bg-cyan-200/80" />
      <div className="absolute -left-5 bottom-10 h-12 w-9 skew-x-6 rounded bg-stone-700" />
      <div className="absolute -left-8 bottom-3 h-6 w-8 origin-bottom skew-x-12 rounded-sm bg-stone-600" />
      <div className="absolute right-8 -top-3 h-10 w-6 rounded-t-md bg-stone-900" />
      <div className="absolute right-7 -top-4 h-2 w-8 rounded bg-stone-700" />
      <div className="absolute -left-9 bottom-11 h-5 w-5 rounded-full bg-amber-200 ring-2 ring-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
      <div className="smoke pointer-events-none absolute -top-8 right-7 select-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-6 w-6 rounded-full bg-stone-400/80 blur-[1px]"
            style={{
              left: `${i * 10}px`,
              animation: `puff ${5 + i * 0.3}s ease-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute left-6 -bottom-2 flex gap-10">
        <OldWheel large dir="cw" />
        <OldWheel large dir="cw" />
        <OldWheel large dir="cw" />
      </div>
    </div>
  );
}

function Compartment({ label }) {
  return (
    <div className="relative mr-3 h-28 w-52 rounded-lg border border-stone-600/50 bg-orange-100 shadow">
      <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
      <div className="absolute inset-x-2 top-5 h-14 rounded-md bg-orange-50/90 ring-1 ring-orange-300" />
      <div className="absolute inset-x-3 top-9 text-center text-base font-semibold text-stone-800">
        {label}
      </div>
      <div className="absolute bottom-4 left-2 right-2 h-2 rounded bg-stone-700" />
      <div className="absolute left-7 flex gap-10" style={{ bottom: -10 }}>
        <OldWheel />
        <OldWheel />
      </div>
    </div>
  );
}

function Caboose() {
  return (
    <div className="relative ml-1 h-28 w-44 rounded-lg border border-stone-600/50 bg-rose-100 shadow">
      <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
      <div className="absolute  inset-x-3 top-7 text-center text-base font-semibold text-red-800">
        Signature Food
      </div>
      <div className="absolute bottom-4 left-2 right-2 h-2 rounded bg-stone-700" />
      <div className="absolute left-7 flex gap-10" style={{ bottom: -10 }}>
        <OldWheel />
        <OldWheel />
      </div>
    </div>
  );
}

function OldWheel({ large = false, dir = "ccw" }) {
  return (
    <div
      className={`relative grid place-items-center rounded-full border-4 border-stone-700 bg-gradient-to-br from-stone-800 to-stone-900 ${
        large ? "h-9 w-9" : "h-7 w-7"
      }`}
      style={{
        animation: `${
          dir === "cw" ? "spin-cw" : "spin-ccw"
        } 2s linear infinite`,
      }}
    >
      <div className="absolute h-0.5 w-5 rotate-45 bg-stone-400" />
      <div className="absolute h-0.5 w-5 -rotate-45 bg-stone-400" />
      <div className="absolute h-0.5 w-3 rotate-90 bg-stone-400" />
      <div className="absolute h-0.5 w-3 bg-stone-400" />
      <div className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 shadow-inner" />
    </div>
  );
}

function StationBoard({
  label = "Self-Ey Junction",
  tagline = "Superfast Express",
}) {
  return (
    <div className="pointer-events-none relative mx-auto mt-4 w-max">
      <div className="absolute -top-4 left-4 h-4 w-px bg-stone-500" />
      <div className="absolute -top-4 right-4 h-4 w-px bg-stone-500" />
      <div className="rounded-md border-4 border-stone-700 bg-amber-200 px-4 py-2 shadow">
        <div className="text-lg font-extrabold tracking-wide text-stone-900 uppercase">
          {label}
        </div>
        <div className="-mt-1 text-[10px] font-semibold tracking-widest text-stone-700 text-center">
          {tagline}
        </div>
      </div>
    </div>
  );
}
