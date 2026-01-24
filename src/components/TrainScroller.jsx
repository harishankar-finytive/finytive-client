// import React, { useMemo } from "react";
// import { motion } from "framer-motion";

// /**
//  * Reusable Train Scroller Template
//  * @param {Array} items - Array of strings or objects to display in cars
//  * @param {string} title - Main section heading
//  * @param {string} subtitle - Subtext below heading
//  * @param {string} stationName - Text for the yellow station board
//  * @param {number} speedSeconds - How long one full pass takes
//  */
// export default function TrainScroller({
//   items = [],
//   title = "Our Categories",
//   subtitle = "Organized for you",
//   stationName = "Main Junction",
//   speedSeconds = 20,
// }) {
//   // Calculate dynamic width to ensure the train completes its journey
//   // Compartment width (208px) + Gap (12px) + Locomotive/Caboose room
//   const trainLength = useMemo(() => (items.length * 220) + 600, [items]);

//   const fade = {
//     hidden: { opacity: 0, y: 16 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-amber-50/20 to-amber-100 py-16">
//       {/* Header Section */}
//       <div className="relative mx-auto max-w-6xl px-4 text-center">
//         <motion.h2
//           className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={fade}
//         >
//           {title}
//           <motion.span
//             className="absolute left-0 bottom-0 h-[3px] w-full bg-red-600 rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             style={{ transformOrigin: "left" }}
//           />
//         </motion.h2>
//         <p className="mt-2 text-stone-600">{subtitle}</p>
//         <StationBoard label={stationName} />
//       </div>

//       {/* Animation Track Area */}
//       <div className="relative mx-auto mt-12 h-44 w-full">
//         {/* Tracks */}
//         <div className="absolute bottom-0 left-0 right-0 h-12 bg-stone-200/50" aria-hidden />
//         <div className="absolute bottom-6 left-0 right-0 flex justify-between px-1 opacity-30">
//           {Array.from({ length: 40 }).map((_, i) => (
//             <div key={i} className="h-3 w-8 bg-stone-600" />
//           ))}
//         </div>
//         <div className="absolute bottom-8 left-0 right-0 h-2 bg-stone-800" aria-hidden />
//         <div className="absolute bottom-4 left-0 right-0 h-2 bg-stone-800" aria-hidden />

//         {/* The Moving Train */}
//         <div
//           className="absolute left-0 bottom-8 z-30"
//           style={{
//             // Dynamic animation using the calculated train length
//             animation: `travel ${speedSeconds}s linear infinite`,
//             "--end-pos": `-${trainLength}px` 
//           }}
//         >
//           <div className="flex h-32 items-end">
//             <div className="-scale-x-100 transform"><Locomotive /></div>
//             <div className="flex items-end">
//               {items.map((label, idx) => (
//                 <Compartment key={idx} label={label} />
//               ))}
//               <Caboose />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes travel {
//           from { transform: translateX(100vw); }
//           to { transform: translateX(var(--end-pos)); }
//         }
//         @keyframes spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         @keyframes puff { 
//             0% { transform: translate(0,0) scale(0.6); opacity: 0.9;} 
//             100% { transform: translate(-100px,-80px) scale(1.4); opacity:0;} 
//         }
//       `}</style>
//     </section>
//   );
// }

// // Sub-components (Locomotive, Compartment, Caboose, OldWheel, StationBoard) 
// // remain largely the same but ensure they use standard Tailwind colors 
// // unless your tailwind.config.js has "brandOrange" and "brandRed" defined.

// function Compartment({ label }) {
//     return (
//       <div className="relative mr-3 h-28 w-52 flex-shrink-0 rounded-lg border border-stone-600/50 bg-orange-100 shadow">
//         <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
//         <div className="absolute inset-x-2 top-5 h-14 rounded-md bg-orange-50/90 flex items-center justify-center px-2 text-center ring-1 ring-orange-300">
//           <span className="text-sm font-semibold text-stone-800 leading-tight">{label}</span>
//         </div>
//         <div className="absolute bottom-4 left-2 right-2 h-2 rounded bg-stone-700" />
//         <div className="absolute left-7 bottom-[-10px] flex gap-10">
//           <OldWheel /><OldWheel />
//         </div>
//       </div>
//     );
// }

// function Locomotive() {
//     return (
//       <div className="relative mr-4 h-28 w-56 rounded-lg bg-stone-800 shadow-lg flex-shrink-0">
//         <div className="absolute bottom-10 left-4 right-10 h-12 rounded-full bg-stone-700" />
//         <div className="absolute right-8 -top-3 h-10 w-6 rounded-t-md bg-stone-900" />
//         <div className="smoke pointer-events-none absolute -top-8 right-7">
//           {[...Array(3)].map((_, i) => (
//             <span key={i} className="absolute block h-6 w-6 rounded-full bg-stone-400/60 blur-sm"
//               style={{ animation: `puff 3s ease-out ${i * 0.8}s infinite` }} />
//           ))}
//         </div>
//         <div className="absolute left-6 -bottom-2 flex gap-10">
//           <OldWheel large /><OldWheel large />
//         </div>
//       </div>
//     );
// }

// function Caboose() {
//     return (
//       <div className="relative ml-1 h-28 w-44 rounded-lg border border-stone-600/50 bg-red-100 shadow flex-shrink-0">
//         <div className="absolute -top-2 left-0 right-0 h-3 rounded-t-xl bg-stone-700" />
//         <div className="absolute inset-0 flex items-center justify-center pt-4 font-bold text-red-800 text-xs">END</div>
//         <div className="absolute left-7 bottom-[-10px] flex gap-10">
//           <OldWheel /><OldWheel />
//         </div>
//       </div>
//     );
// }

// function OldWheel({ large = false }) {
//     return (
//       <div className={`rounded-full border-4 border-stone-700 bg-stone-900 ${large ? "h-9 w-9" : "h-7 w-7"}`}
//            style={{ animation: `spin-cw 2s linear infinite` }}>
//         <div className="h-full w-full relative flex items-center justify-center">
//             <div className="absolute w-full h-0.5 bg-stone-600 rotate-45" />
//             <div className="absolute w-full h-0.5 bg-stone-600 -rotate-45" />
//                   <div className="absolute h-0.5 w-5 rotate-45 bg-stone-400" />
//       <div className="absolute h-0.5 w-5 -rotate-45 bg-stone-400" />
//       <div className="absolute h-0.5 w-3 rotate-90 bg-stone-400" />
//       <div className="absolute h-0.5 w-3 bg-stone-400" />
//             <div className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 shadow-inner" />

//         </div>
//       </div>
//     );
// }

// function StationBoard({ label }) {
//     return (
//       <div className="mt-4 inline-block rounded-md border-4 border-stone-700 bg-amber-200 px-6 py-2 shadow-md">
//         <div className="text-lg font-black uppercase text-stone-900">{label}</div>
//       </div>
//     );
// }



import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";

export default function TrainScroller({
  items = [],
  title = "Categories",
  stationName = "SELF-EY JUNCTION",
  speedSeconds = 25,
  enableSound = false,
}) {
  const trainLength = useMemo(() => items.length * 230 + 950, [items]);
  const ambientRef = useRef(null);
  const whistleRef = useRef(null);

  const handleWhistle = () => {
    if (!enableSound) return;
    
    // Play Whistle
    if (whistleRef.current) {
      whistleRef.current.currentTime = 0;
      whistleRef.current.play();
    }

    // Ensure Ambient sound is running
    if (ambientRef.current && ambientRef.current.paused) {
      ambientRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] py-16">
      {/* Audio Assets */}
      <audio ref={ambientRef} loop src="https://www.soundjay.com/transportation/sounds/train-pass-by-01.mp3" />
      <audio ref={whistleRef} src="https://www.soundjay.com/transportation/sounds/train-whistle-01.mp3" />

      {/* Branded Heading */}
      <div className="relative mx-auto flex flex-col items-center px-4 text-center">
        <div className="mb-6">
          <h2 className="relative inline-block text-2xl sm:text-3xl font-bold tracking-tight text-black">
            <span className="text-brandOrange">Self</span>
            <span className="text-brandRed">-Ey</span> {title}
            <span className="absolute left-0 bottom-0 h-[3px] w-full bg-brandRed rounded-full" />
          </h2>
        </div>
        
        {/* Yellow Station Board with Interactive Whistle */}
        <div className="relative border-[4px] border-[#44403C] bg-[#FDE68A] px-10 py-3 shadow-md group">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-[#1C1917] uppercase">
            {stationName}
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#44403C] mt-1">
            Superfast Express
          </p>

          {/* THE WHISTLE BUTTON */}
          <button 
            onClick={handleWhistle}
            className="absolute -right-12 top-0 h-16 w-8 bg-gradient-to-b from-amber-400 to-amber-700 rounded-b-full border-2 border-stone-800 shadow-lg active:translate-y-2 transition-transform cursor-pointer flex flex-col items-center justify-end pb-2 group"
            title="Pull for Whistle!"
          >
            <div className="w-1 h-8 bg-stone-800 -mt-10 mb-2" />
            <div className="w-4 h-4 rounded-full bg-amber-200 border border-amber-800 animate-pulse" />
          </button>
          
          <div className="absolute -top-6 left-1/4 h-6 w-1 bg-[#44403C]" />
          <div className="absolute -top-6 right-1/4 h-6 w-1 bg-[#44403C]" />
        </div>
        <p className="mt-4 text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">Pull the brass handle for the whistle</p>
      </div>

      {/* Railway Track Area */}
      <div className="relative mt-24 h-48 w-full">
        <div className="absolute bottom-0 h-14 w-full bg-[#C29D79]" /> 
        <div className="absolute bottom-6 h-4 w-full bg-[#3F3934] flex justify-around items-center px-1">
             {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="h-3 w-6 bg-[#635B54] rounded-sm opacity-60 flex-shrink-0" />
             ))}
        </div>
        <div className="absolute bottom-8 h-2 w-full bg-[#1C1917] shadow-lg" />

        {/* The Moving Train */}
        <div
          className="absolute left-0 bottom-8 z-30"
          style={{
            animation: `travel ${speedSeconds}s linear infinite`,
            "--end-pos": `-${trainLength}px` 
          }}
        >
          <div className="flex h-40 items-end">
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
        @keyframes travel { from { transform: translateX(100vw); } to { transform: translateX(var(--end-pos)); } }
        @keyframes spin-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes puff { 
          0% { transform: translate(0,0) scale(0.5); opacity: 0; } 
          20% { opacity: 0.8; }
          100% { transform: translate(-150px,-120px) scale(2.5); opacity:0; } 
        }
      `}</style>
    </section>
  );
}

function Locomotive() {
  return (
    <div className="relative mr-4 h-40 w-[420px] flex-shrink-0 group">
      {/* 1. THE MAIN BOILER - 3D Gradient & Piping */}
      <div className="absolute bottom-6 right-0 h-22 w-80 rounded-l-full bg-gradient-to-b from-stone-600 via-stone-900 to-black border-y border-stone-800 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
        {/* Steam Pipes along the boiler */}
        <div className="absolute top-6 left-10 h-1.5 w-60 bg-gradient-to-b from-amber-600 to-amber-900 rounded-full opacity-60 shadow-sm" />
        <div className="absolute top-10 left-12 h-1 w-56 bg-stone-500 rounded-full opacity-30" />
        
        {/* Riveted Bands (The vertical metal strips) */}
        {[40, 100, 160, 220].map((pos) => (
          <div key={pos} style={{ left: `${pos}px` }} className="absolute top-0 h-full w-3 bg-stone-800/80 border-x border-stone-700/50 flex flex-col justify-around py-1">
             <div className="w-1 h-1 rounded-full bg-stone-500/50 mx-auto" />
             <div className="w-1 h-1 rounded-full bg-stone-500/50 mx-auto" />
          </div>
        ))}
      </div>
      
      {/* 2. FRONT FACE - The High-Detail Smokebox */}
      <div className="absolute bottom-6 right-0 h-22 w-16 rounded-r-3xl bg-stone-950 border-l-4 border-stone-800 flex flex-col items-center justify-center shadow-2xl">
         {/* Main Headlamp - Multi-layered glow */}
         <div className="relative h-9 w-9 rounded-full bg-stone-800 border-2 border-stone-600 p-1 flex items-center justify-center">
            <div className="h-full w-full rounded-full bg-amber-100 shadow-[0_0_35px_rgba(251,191,36,0.9),inset_0_0_10px_orange]" />
            <div className="absolute top-1 right-2 h-2 w-2 rounded-full bg-white opacity-40 blur-[1px]" />
         </div>
         {/* Front Number Plate */}
         <div className="mt-2 px-2 bg-red-900 border border-red-700 rounded-sm text-[7px] font-black text-white tracking-widest uppercase">90-SUPER</div>
      </div>

      {/* 3. THE COWCATCHER - Detailed Iron Grill */}
      <div 
        className="absolute bottom-6 -right-12 h-14 w-20 bg-gradient-to-br from-stone-700 via-stone-900 to-black border-r border-stone-600" 
        style={{ clipPath: "polygon(0 0, 100% 100%, 35% 100%, 0 20%)" }} 
      >
        {/* Grill Slats */}
        <div className="w-full h-full flex flex-col justify-around py-2 opacity-30">
          {[...Array(4)].map((_, i) => <div key={i} className="h-[1px] w-full bg-white" />)}
        </div>
      </div>

      {/* 4. ENGINEER'S CABIN - Window & Overhang */}
      <div className="absolute bottom-6 left-8 h-36 w-28 rounded-t-2xl bg-gradient-to-b from-stone-800 to-stone-950 border-2 border-stone-700 shadow-2xl z-20">
        {/* Arched Window with Frame */}
        <div className="absolute top-5 left-4 right-4 h-14 rounded-t-full border-4 border-stone-800 bg-sky-950/40 shadow-inner flex items-center justify-center overflow-hidden">
           <div className="w-[1px] h-full bg-stone-800/50 absolute left-1/2" />
           <div className="w-full h-[1px] bg-stone-800/50 absolute top-1/2" />
        </div>
        {/* Cabin Roof Overhang */}
        <div className="absolute -top-3 -left-3 -right-3 h-6 bg-stone-900 rounded-full border-b-2 border-stone-700 shadow-lg" />
      </div>

      {/* 5. SMOKESTACK & DOMES */}
      <div className="absolute right-36 top-1 h-18 w-14 z-10">
          {/* Main Chimney */}
          <div className="absolute bottom-0 h-18 w-12 bg-stone-900 rounded-t-sm border-t-4 border-stone-800">
            <div className="smoke absolute -top-16 left-0">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="absolute block h-16 w-16 rounded-full bg-stone-500/30 blur-2xl"
                  style={{ animation: `puff 4s ease-out ${i * 0.5}s infinite` }} />
              ))}
            </div>
          </div>
          {/* Steam Dome */}
          <div className="absolute bottom-0 -left-20 h-7 w-16 rounded-t-full bg-stone-800 border-t border-stone-600 shadow-sm" />
          {/* Sand Dome */}
          <div className="absolute bottom-0 -left-44 h-6 w-12 rounded-t-full bg-stone-800 border-t border-stone-600" />
      </div>

      {/* 6. DRIVE SYSTEM - 8 Wheels & Heavy Rods */}
      <div className="absolute left-14 -bottom-6 flex gap-4 z-30">
        {[...Array(4)].map((_, i) => <OldWheel key={i} large />)}
      </div>

      {/* Primary Connecting Rod - Animated */}
      <motion.div 
        className="absolute bottom-3 left-16 h-4 w-72 bg-gradient-to-b from-stone-400 to-stone-600 rounded-full z-40 border border-stone-700 shadow-md"
        animate={{ 
          y: [0, -6, 0, 6, 0], 
          x: [-5, 5, -5],
          rotate: [0, -1, 0, 1, 0] 
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        {/* Mechanical Bolt details on rod */}
        <div className="flex justify-between px-4 mt-1">
          {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-stone-800 shadow-inner" />)}
        </div>
      </motion.div>
    </div>
  );
}

function Compartment({ label }) {
  return (
    <div className="relative mr-4 h-28 w-56 flex-shrink-0 rounded-xl border-[3px] border-[#3F3934] bg-[#FFF7ED] shadow-md">
      <div className="absolute inset-2 rounded-lg h-18 w-50 border-2 border-orange-200 flex items-center justify-center bg-white/50 text-stone-800 font-bold px-2">{label}</div>
      <div className="absolute left-8 bottom-[-12px] flex gap-14">
        <OldWheel /><OldWheel />
      </div>
    </div>
  );
}

function Caboose() {
  return (
    <div className="relative ml-1 h-28 w-44 rounded-xl border-[3px] border-[#3F3934] bg-red-50 flex-shrink-0 shadow-md">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-4xl font-black italic uppercase">END</div>
      <div className="absolute left-8 bottom-[-12px] flex gap-12">
        <OldWheel /><OldWheel />
      </div>
    </div>
  );
}

function OldWheel({ large = false }) {
  return (
    <div 
      className={`rounded-full border-[4px] border-[#1C1917] bg-[#262626] ${large ? "h-14 w-14" : "h-8 w-8"}`}
      style={{ animation: `spin-ccw 1.5s linear infinite` }}
    >
      <div className="h-full w-full relative flex items-center justify-center">
          {[0, 45, 90, 135].map(deg => (
            <div key={deg} className="absolute w-full h-[2px] bg-stone-700" style={{ transform: `rotate(${deg}deg)` }} />
          ))}
          <div className="absolute h-4 w-4 rounded-full bg-[#FACC15] shadow-[0_0_12px_#FDE68A] border-2 border-black" />
      </div>
    </div>
  );
}
