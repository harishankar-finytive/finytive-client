import React, { useEffect, useRef, useState } from "react";
import ApplyCard from "./cards/ApplyCard";
import stickeyImg from "../assets/images/indianCur.png";
import {
  Utensils,
  SquareMenu,
  PackageCheck,
  ShoppingCart,
  Globe,
  Sparkles,
  Wallet,
  IndianRupee,
  Truck
} from "lucide-react";

const HIGHLIGHT_MS = 900;   
const BETWEEN_MS   = 250;   
const customerFallbackIcons = [
  <SquareMenu aria-label="Daily Menu Reveal" />,
  <Utensils aria-label="Order Placement" />,
  <Globe aria-label="Cultural Preferences" />,
  <Sparkles aria-label="Subscription Module" />,
  <IndianRupee aria-label="Affordable Plans" />,
  <Wallet aria-label="Extra" />,
];

const vendorFallbackIcons = [
  <SquareMenu aria-label="Submit Menu" />,
  <ShoppingCart aria-label="Orders Window" />,
  <Utensils aria-label="Start Cooking" />,
  <PackageCheck aria-label="Pack & Handover" />,
  <Wallet aria-label="Payouts" />,
  <Sparkles aria-label="Grow with Support" />,
];


const StickyDiv = ({ philo, cardDetails }) => {


  
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState("customer"); // "customer" | "vendor"

  const iconFor = (i) =>
  activeTab === "customer"
    ? (customerFallbackIcons[i] || customerFallbackIcons[0])
    : (vendorFallbackIcons[i] || vendorFallbackIcons[0]);


const vendorCards = [
  {
    cardStep: "01",
    cardTitle: "Earn from Your Signature Dish",
    cardContent:
      "Cook what you’re best at and keep quality high. Build repeat demand around your specialties without juggling marketing or logistics.",
     icon: <Utensils aria-label="Signature Dish" />,
    highlightPhrase: "what you’re best",
  },
  {
    cardStep: "02",
    cardTitle: "Zero-Waste, Confirmed Orders",
    cardContent:
      "You cook only what’s actually ordered—no guessing, no leftovers, better margins. Your morning starts with a clear portion count and notes.",
     icon: <ShoppingCart aria-label="Confirmed Orders" />,
    highlightPhrase: "only what’s actually ordered",
  },
  {
    cardStep: "03",
    cardTitle: "Flexible on Your Terms",
    cardContent:
      "Choose your cooking days, set fair prices, and limit portions. You control your schedule and the pace you want to grow.",
     icon: <Wallet aria-label="Flexible & Fair" />,
    highlightPhrase: "set fair prices",
  },
  {
    cardStep: "04",
    cardTitle: "Trusted, Local & Paid on Time",
    cardContent:
      "Your verified profile and reviews build trust with nearby customers. Track earnings clearly and get paid on schedule—no awkward follow-ups.",
     icon: <PackageCheck aria-label="Trust & Payouts" />,
    highlightPhrase: "paid on schedule",
  },
  {
    cardStep: "05",
    cardTitle: "We Handle Delivery",
    cardContent:
      "Can’t deliver? No problem—we pick up from your home and deliver to customers with OTP and live tracking. You focus on cooking; we handle the doorstep.",
     icon: <Truck aria-label="Delivery Support" />,
    highlightPhrase: "pick up from your home",
  },
];


  // Choose dataset by tab
  const cards = activeTab === "customer" ? cardDetails : vendorCards;
  const leftTitle =
    activeTab === "customer" ? "Why  " : "Why ";
  const leftSubtitle =
    activeTab === "customer"
      ? `"${philo}"`
      : `"Earn on your terms with trust, flexibility, and local demand."`;

  // Start sequence when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(0);
        } else {
          setActiveIndex(-1);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Restart sequence when switching tabs
  useEffect(() => {
    setActiveIndex(0);
  }, [activeTab]);

  // Advance to next card with delays
  useEffect(() => {
    if (activeIndex < 0) return;
    if (!Array.isArray(cards) || activeIndex >= cards.length) return;

    const t = setTimeout(() => {
      setActiveIndex((i) => (i + 1 < cards.length ? i + 1 : i));
    }, HIGHLIGHT_MS + BETWEEN_MS);

    return () => clearTimeout(t);
  }, [activeIndex, cards]);

  if (!Array.isArray(cardDetails) || cardDetails.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        No card details available.
      </div>
    );
  }

  // Helper for safe access
  const get = (i) => cards[i] || {};

  return (
    <div ref={sectionRef}>
      <div className="bg-brandBg">
        <div className="grid grid-cols-1 lg:grid-cols-3 px-2 gap-12 sm:px-6 lg:px-25 mx-auto py-12 ">
          {/* Sticky Left Column */}
          <div className="w-full lg:w-auto lg:sticky top-24 self-start">
            {/* Tabs on top of title */}
            <div className="mb-4 inline-flex rounded-full border border-stone-300 bg-white p-1">
              <button
                onClick={() => setActiveTab("customer")}
                className={`px-4 py-2 text-base font-semibold rounded-full transition ${
                  activeTab === "customer"
                    ? "bg-stone-900 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
                aria-pressed={activeTab === "customer"}
              >
                Customer
              </button>
              <button
                onClick={() => setActiveTab("vendor")}
                className={`ml-1 px-4 py-2 text-base font-semibold rounded-full transition ${
                  activeTab === "vendor"
                    ? "bg-stone-900 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
                aria-pressed={activeTab === "vendor"}
              >
                Vendor
              </button>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl fade-in">
              {leftTitle}<span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span>?
            </h2>
            <h1 className="text-lg font-normal text-gray-800">{leftSubtitle}</h1>
            <img src={stickeyImg} alt="" />
          </div>

          {/* Column 2 */}
          <div className="hidden sm:flex flex-col gap-4 sm:gap-12">
            <ApplyCard
              icon={get(0).icon ?? <SquareMenu aria-label="Item 1" />}
              step={get(0).cardStep}
              cardTitle={get(0).cardTitle}
              cardContent={get(0).cardContent}
              highlightPhrase={
                activeTab === "customer"
                  ? // Use EXACT substring from your customer content (fix the typo if needed)
                    "every day from 7 PM to 9:30 AM the every morning."
                  : get(0).highlightPhrase
              }
              active={activeIndex >= 0}
              speedMs={1200}
              lineStaggerMs={250}
            />
            <ApplyCard
              icon={get(2).icon ?? <Globe aria-label="Item 3" />}
              step={get(2).cardStep}
              cardTitle={get(2).cardTitle}
              cardContent={get(2).cardContent}
              highlightPhrase={
                activeTab === "customer"
                  ? "cultural and regional preferences,"
                  : get(2).highlightPhrase
              }
              active={activeIndex >= 2}
              speedMs={1200}
              lineStaggerMs={250}
            />
            <ApplyCard
              icon={get(4).icon ?? <IndianRupee aria-label="Item 5" />}
              step={get(4).cardStep}
              cardTitle={get(4).cardTitle}
              cardContent={get(4).cardContent}
              highlightPhrase={
                activeTab === "customer"
                  ? "₹999 per month — valid for 30 days"
                  : get(4).highlightPhrase
              }
              active={activeIndex >= 4}
              speedMs={1200}
              lineStaggerMs={250}
            />
          </div>

          {/* Column 3 (Staggered) */}
          <div className="hidden sm:flex flex-col gap-12">
            <div className="mt-32">
              <ApplyCard
                icon={get(1).icon ?? <Utensils aria-label="Item 2" />}
                step={get(1).cardStep}
                cardTitle={get(1).cardTitle}
                cardContent={get(1).cardContent}
                highlightPhrase={
                  activeTab === "customer"
                    ? "specializes in a signature dish"
                    : get(1).highlightPhrase
                }
                active={activeIndex >= 1}
                speedMs={1200}
                lineStaggerMs={250}
              />
            </div>
            <ApplyCard
              icon={get(3).icon ?? <Sparkles aria-label="Item 4" />}
              step={get(3).cardStep}
              cardTitle={get(3).cardTitle}
              cardContent={get(3).cardContent}
              highlightPhrase={
                activeTab === "customer"
                  ? "monthly budget constraints"
                  : get(3).highlightPhrase
              }
              active={activeIndex >= 3}
              speedMs={1200}
              lineStaggerMs={250}
            />
          </div>

          {/* Mobile column */}
          <div className="flex sm:hidden flex-col gap-4 sm:gap-12">
            {[0, 1, 2, 3, 4, 5].map((i) =>
              get(i).cardTitle ? (
                <ApplyCard
                  key={i}
                  icon={get(i).icon ?? iconFor(i)} 
                  step={get(i).cardStep}
                  cardTitle={get(i).cardTitle}
                  cardContent={get(i).cardContent}
                  highlightPhrase={
                    activeTab === "customer"
                      ? // match exact phrases on customer side
                        i === 0
                        ? "every day from 7 PM to 9:30 AM the every morning."
                        : i === 1
                        ? "specializes in a signature dish"
                        : i === 2
                        ? "cultural and regional preferences,"
                        : i === 3
                        ? "monthly budget constraints"
                        : i === 4
                        ? "₹999 per month — valid for 30 days"
                        : get(i).highlightPhrase
                      : get(i).highlightPhrase
                  }
                  active={activeIndex >= i}
                  speedMs={1200}
                  lineStaggerMs={250}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDiv;
