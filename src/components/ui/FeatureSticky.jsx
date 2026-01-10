import React, { useEffect, useRef, useState } from "react";
import ApplyCard from "../../components/cards/ApplyCard";
import { ICON_MAP } from "../../constants/caretakerContent";

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

  const currentTabData =
    tabs.find((t) => t.id === activeTabId) || tabs[0];

  const cards = currentTabData?.cards || [];

  // ✅ helper must be BEFORE JSX
  const getCard = (i) => cards[i] || {};

  // Intersection Observer
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveIndex(0);
        else setActiveIndex(-1);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Reset on tab change
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTabId]);

  // Step-by-step animation
  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= cards.length) return;
    const t = setTimeout(() => {
      setActiveIndex((i) =>
        i + 1 < cards.length ? i + 1 : i
      );
    }, HIGHLIGHT_MS + BETWEEN_MS);
    return () => clearTimeout(t);
  }, [activeIndex, cards]);

  return (
    <div ref={sectionRef} className="bg-brandBg">
      <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-12 sm:px-6 lg:px-25 mx-auto py-12">

        {/* LEFT STICKY COLUMN */}
        <div className="w-full lg:sticky top-24 self-start">
          <div className="mb-4 inline-flex rounded-full border bg-white p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  activeTabId === tab.id
                    ? "bg-stone-900 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h2 className="mb-4 text-4xl font-bold">
            {titlePrefix}
            <span className="text-brandOrange">{titleBrand}</span>?
          </h2>

          <p className="text-gray-800">{currentTabData?.subtitle}</p>

          {stickyImage && (
            <img src={stickyImage} alt="" className="mt-4" />
          )}
        </div>

        {/* COLUMN 2 */}
        <div className="hidden sm:flex flex-col gap-12">
          {[0, 2, 4].map((idx) => {
            const card = getCard(idx);
            if (!card.cardTitle) return null;

            const Icon = ICON_MAP[card.icon];

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

        {/* COLUMN 3 */}
        <div className="hidden sm:flex flex-col gap-12 mt-32">
          {[1, 3, 5].map((idx) => {
            const card = getCard(idx);
            if (!card.cardTitle) return null;

            const Icon = ICON_MAP[card.icon];

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

        {/* MOBILE */}
        <div className="flex sm:hidden flex-col gap-6">
          {cards.map((card, i) => {
            const Icon = ICON_MAP[card.icon];
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
