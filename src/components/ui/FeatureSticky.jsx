// import React, { useEffect, useRef, useState } from "react";
// import ApplyCard from "../../components/cards/ApplyCard";

// // ✅ Fix 1: Alias the imports to avoid naming conflicts
// import { ICON_MAP as CaretakerIcons } from "../../constants/caretakerContent";
// import { ICON_MAP as EventIcons } from "../../constants/evententertainmentContent";
// import { ICON_MAP as ActingIcons } from "../../constants/actingdriverContent";
// import { ICON_MAP as AutoIcons } from "../../constants/instantautomobilerepairContent";

// // ✅ Fix 2: Merge all icon maps into one master object for easy lookup
// const MASTER_ICON_MAP = {
//   ...CaretakerIcons,
//   ...EventIcons,
//   ...ActingIcons,
//   ...AutoIcons,
// };

// const HIGHLIGHT_MS = 900;
// const BETWEEN_MS = 250;

// const FeatureSticky = ({ 
//   titlePrefix = "Why ", 
//   titleBrand = "Self-Ey", 
//   stickyImage, 
//   tabs = [] 
// }) => {
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

//   const currentTabData = tabs.find((t) => t.id === activeTabId) || tabs[0];
//   const cards = currentTabData?.cards || [];

//   const getCard = (i) => cards[i] || {};

//   // Intersection Observer to start animation when scrolled into view
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setActiveIndex(0);
//         else setActiveIndex(-1);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) io.observe(sectionRef.current);
//     return () => io.disconnect();
//   }, []);

//   // Reset animation index when tab changes
//   useEffect(() => {
//     setActiveIndex(0);
//   }, [activeTabId]);

//   // Step-by-step animation logic
//   useEffect(() => {
//     if (activeIndex < 0 || activeIndex >= cards.length) return;
//     const t = setTimeout(() => {
//       setActiveIndex((i) =>
//         i + 1 < cards.length ? i + 1 : i
//       );
//     }, HIGHLIGHT_MS + BETWEEN_MS);
//     return () => clearTimeout(t);
//   }, [activeIndex, cards.length]); // Added cards.length to dependencies

//   return (
//     <div ref={sectionRef} className="bg-brandBg">
//       <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-12 sm:px-6 lg:px-25 mx-auto py-12">

//         {/* LEFT STICKY COLUMN */}
//         <div className="w-full lg:sticky top-24 self-start">
//           <div className="mb-4 inline-flex rounded-full border bg-white p-1">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTabId(tab.id)}
//                 className={`px-4 py-2 rounded-full font-semibold transition ${
//                   activeTabId === tab.id
//                     ? "bg-stone-900 text-white"
//                     : "text-stone-700 hover:bg-stone-100"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <h2 className="mb-4 text-4xl font-bold">
//             {titlePrefix}
//             <span className="text-brandOrange">{titleBrand}</span>?
//           </h2>

//           <p className="text-gray-800">{currentTabData?.subtitle}</p>

//           {stickyImage && (
//             <img src={stickyImage} alt="" className="mt-4" />
//           )}
//         </div>

//         {/* COLUMN 2 (Even Indices) */}
//         <div className="hidden sm:flex flex-col gap-12">
//           {[0, 2, 4].map((idx) => {
//             const card = getCard(idx);
//             if (!card.cardTitle) return null;

//             // ✅ Fix 3: Use the Master Icon Map
//             const Icon = MASTER_ICON_MAP[card.icon];

//             return (
//               <ApplyCard
//                 key={idx}
//                 {...card}
//                 icon={Icon ? <Icon /> : null}
//                 active={activeIndex >= idx}
//                 speedMs={1200}
//                 lineStaggerMs={250}
//               />
//             );
//           })}
//         </div>

//         {/* COLUMN 3 (Odd Indices) */}
//         <div className="hidden sm:flex flex-col gap-12 mt-32">
//           {[1, 3, 5].map((idx) => {
//             const card = getCard(idx);
//             if (!card.cardTitle) return null;

//             // ✅ Fix 3: Use the Master Icon Map
//             const Icon = MASTER_ICON_MAP[card.icon];

//             return (
//               <ApplyCard
//                 key={idx}
//                 {...card}
//                 icon={Icon ? <Icon /> : null}
//                 active={activeIndex >= idx}
//                 speedMs={1200}
//                 lineStaggerMs={250}
//               />
//             );
//           })}
//         </div>

//         {/* MOBILE VIEW */}
//         <div className="flex sm:hidden flex-col gap-6">
//           {cards.map((card, i) => {
//             const Icon = MASTER_ICON_MAP[card.icon];
//             return (
//               <ApplyCard
//                 key={i}
//                 {...card}
//                 icon={Icon ? <Icon /> : null}
//                 active={activeIndex >= i}
//                 speedMs={1200}
//                 lineStaggerMs={250}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSticky;
import React, { useEffect, useRef, useState } from "react";
import ApplyCard from "../../components/cards/ApplyCard";

// ✅ Fix 1: Alias the imports to avoid naming conflicts
import { ICON_MAP as CaretakerIcons } from "../../constants/caretakerContent";
import { ICON_MAP as EventIcons } from "../../constants/evententertainmentContent";
import { ICON_MAP as ActingIcons } from "../../constants/actingdriverContent";
import { ICON_MAP as AutoIcons } from "../../constants/instantautomobilerepairContent";

const MASTER_ICON_MAP = {
  ...CaretakerIcons,
  ...EventIcons,
  ...ActingIcons,
  ...AutoIcons,
};

const HIGHLIGHT_MS = 900;
const BETWEEN_MS = 250;

const FeatureSticky = ({ 
  titlePrefix = "Why ", 
  titleBrand = "Self-Ey", 
  stickyImage, 
  tabs = [] 
}) => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const currentTabData = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const cards = currentTabData?.cards || [];

  const getCard = (i) => cards[i] || {};

  // ✅ The Highlight Marker Style with wipe-in animation
  const renderHighlightedSubtitle = () => {
    if (!currentTabData) return null;
    const { subtitle, highlightPhrase } = currentTabData;

    if (!highlightPhrase || !subtitle.includes(highlightPhrase)) {
      return <p className="leading-relaxed text-gray-900 font-normal">{subtitle}</p>;
    }

    const parts = subtitle.split(highlightPhrase);

return (
      <p className="leading-relaxed text-black font-normal">
        <span>{parts[0]}</span>
        <mark 
          className="rounded px-1 py-0.5 transition-all duration-[1200ms] ease-in-out" 
          style={{ 
            // ✅ Switches text to white only when the red highlight is active
            color: isHighlighted ? 'white' : 'black', 
            background: "linear-gradient(90deg, #d62828 0px, #d62828 0px) 0% 0% / 100% 100% no-repeat",
            backgroundSize: isHighlighted ? "100% 100%" : "0% 100%",
            backgroundColor: "transparent",
            display: 'inline', // Ensures it stays part of the text flow
          }}
        >
          {highlightPhrase}
        </mark>
        <span>{parts[1]}</span>
      </p>
    );
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(0);
          // Small delay to trigger the highlight wipe after component enters view
          setTimeout(() => setIsHighlighted(true), 300);
        } else {
          setActiveIndex(-1);
          setIsHighlighted(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Reset highlight animation when tab changes
  useEffect(() => {
    setActiveIndex(0);
    setIsHighlighted(false);
    const t = setTimeout(() => setIsHighlighted(true), 50);
    return () => clearTimeout(t);
  }, [activeTabId]);

  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= cards.length) return;
    const t = setTimeout(() => {
      setActiveIndex((i) =>
        i + 1 < cards.length ? i + 1 : i
      );
    }, HIGHLIGHT_MS + BETWEEN_MS);
    return () => clearTimeout(t);
  }, [activeIndex, cards.length]);

  return (
    <div ref={sectionRef} className="bg-brandBg">
      <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-12 sm:px-6 lg:px-25 mx-auto py-12">

        {/* LEFT STICKY COLUMN */}
        <div className="w-full lg:sticky top-24 self-start">
          <div className="mb-6 inline-flex rounded-full border bg-white p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTabId === tab.id
                    ? "bg-stone-900 text-white shadow-md"
                    : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h2 className="mb-4 text-4xl font-black tracking-tight text-stone-900">
            {titlePrefix}
            <span className="text-brandOrange">{titleBrand}</span>?
          </h2>

          <div className="max-w-md text-lg">
            {renderHighlightedSubtitle()}
          </div>

          {stickyImage && (
            <div className="relative mt-8 group overflow-hidden rounded-2xl">
              <img 
                src={stickyImage} 
                alt="Feature Illustration" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          )}
        </div>

        {/* COLUMN 2 (Even Indices) */}
        <div className="hidden sm:flex flex-col gap-12">
          {[0, 2, 4].map((idx) => {
            const card = getCard(idx);
            if (!card.cardTitle) return null;
            const Icon = MASTER_ICON_MAP[card.icon];
            return (
              <ApplyCard
                key={idx}
                {...card}
                icon={Icon ? <Icon /> : null}
                active={activeIndex >= idx}
                speedMs={1200}
                lineStaggerMs={250}
              />
            );
          })}
        </div>

        {/* COLUMN 3 (Odd Indices) */}
        <div className="hidden sm:flex flex-col gap-12 mt-32">
          {[1, 3, 5].map((idx) => {
            const card = getCard(idx);
            if (!card.cardTitle) return null;
            const Icon = MASTER_ICON_MAP[card.icon];
            return (
              <ApplyCard
                key={idx}
                {...card}
                icon={Icon ? <Icon /> : null}
                active={activeIndex >= idx}
                speedMs={1200}
                lineStaggerMs={250}
              />
            );
          })}
        </div>

        {/* MOBILE VIEW */}
        <div className="flex sm:hidden flex-col gap-6">
          {cards.map((card, i) => {
            const Icon = MASTER_ICON_MAP[card.icon];
            return (
              <ApplyCard
                key={i}
                {...card}
                icon={Icon ? <Icon /> : null}
                active={activeIndex >= i}
                speedMs={1200}
                lineStaggerMs={250}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureSticky;