import React, { useEffect, useMemo, useRef, useState } from "react";

/** Left→Right sweep highlight block */
const HighlightSweep = ({ children, on, duration = 900, delay = 0 }) => (
  <mark
    className="rounded px-1 py-0.5"
    style={{
      background: "linear-gradient(90deg, #fde047 0 0) no-repeat",
      backgroundSize: on ? "100% 100%" : "0% 100%",
      transition: `background-size ${duration}ms ease-in-out ${delay}ms`,
    }}
  >
    {children}
  </mark>
);

/**
 * ApplyCard
 * - Supports icon (Lucide) or numeric step
 * - Two highlight modes:
 *    1) phrase mode (highlightPhrase) — continuous sweep of exact substring
 *    2) linewise mode (linewise) — highlights each line/sentence with stagger
 */
const ApplyCard = ({
  step,
  cardTitle,
  cardContent,
  icon = null,
  // phrase mode
  highlightPhrase = "",
  // linewise mode
  linewise = false,
  lineStaggerMs = 250,
  // common
  active = false,
  speedMs = 900,
  badgeClassName = "bg-orange-400",
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe visibility so we only animate when on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const contentNode = useMemo(() => {
    // LINEWISE MODE — split by explicit \n else by sentence boundaries
    if (linewise) {
      const lines = cardContent.includes("\n")
        ? cardContent.split(/\n+/).filter(Boolean)
        : cardContent.split(/(?<=[.?!])\s+/).filter(Boolean);

      return (
        <div className="space-y-1">
          {lines.map((ln, i) => (
            <span
              key={i}
              className="block leading-relaxed text-gray-900 font-normal"
            >
              <HighlightSweep
                on={active && inView}
                duration={speedMs}
                delay={i * lineStaggerMs}
              >
                {ln}
              </HighlightSweep>
            </span>
          ))}
        </div>
      );
    }

    // PHRASE MODE — continuous sweep over exact substring (case-insensitive)
    if (!highlightPhrase) return cardContent;

    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(esc(highlightPhrase), "i");
    const match = String(cardContent).match(re);
    if (!match) return cardContent; // phrase not found → show plain

    const [before, hit, after] = [
      cardContent.slice(0, match.index),
      cardContent.slice(match.index, match.index + match[0].length),
      cardContent.slice(match.index + match[0].length),
    ];

    return (
      <>
        <span>{before}</span>
        <HighlightSweep on={active && inView} duration={speedMs}>
          {hit}
        </HighlightSweep>
        <span>{after}</span>
      </>
    );
  }, [cardContent, linewise, highlightPhrase, active, inView, speedMs, lineStaggerMs]);

  return (
    <div ref={ref}>
      {/* Step Card */}
      <div
        className="relative group p-4 sm:p-8 transition-transform duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1.5 fade-in overflow-hidden"
        style={{ animationDelay: "0.3s" }}
      >
        <div
          aria-hidden="true"
          className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-600 to-white blur-2xl opacity-25"
        />
        {/* Badge: icon OR step number */}
        <div
          className={`flex items-center justify-center w-16 h-16 mb-12 rounded-full ${badgeClassName}`}
        >
          {icon
            ? React.isValidElement(icon)
              ? React.cloneElement(icon, { className: "h-7 w-7 text-white" })
              : null
            : <span className="text-3xl font-bold text-white">{step}</span>}
        </div>

        <h3 className="mb-3 text-2xl font-medium text-black">{cardTitle}</h3>
        <p className="leading-relaxed text-gray-900 font-normal">
          {contentNode}
        </p>
      </div>
    </div>
  );
};

export default ApplyCard;
