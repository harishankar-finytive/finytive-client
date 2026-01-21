import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const PricingTable = () => {
  const plans = [
    {
      name: "BASIC",
      price: "₹999",
      accent: "bg-[#f77f00]",
      subHeading: "BASIC PLAN",
      features: [
        "6 Meals Included",
        "30 Days Validity",
        "Veg & Non-Veg Options",
        "Standard Delivery"
      ],
    },
    {
      name: "STANDARD",
      price: "₹1,499",
      accent: "bg-[#f77f00]",
      subHeading: "STANDARD PLAN",
      features: [
        "12 Meals Included",
        "45 Days Validity",
        "Veg & Non-Veg Options",
        "Priority Support",
        "Flexible Scheduling"
      ],
    },
    {
      name: "PREMIUM",
      price: "₹2,499",
      accent: "bg-[#d62828]",
      subHeading: "PREMIUM PLAN",
      features: [
        "24 Meals Included",
        "58 Days Validity",
        "Veg & Non-Veg Options",
        "Instant Delivery",
        "Custom Meal Prep",
        "Dedicated Manager"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-start p-10 font-sans relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-600/10 blur-[120px] rounded-full" />

      {/* NEW HEADING SECTION */}
      <div className="relative z-10 text-center max-w-4xl mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative inline-block">
    <h2 className="text-5xl font-black text-slate-900 tracking-tight pb-4">
      Our <span className="text-[#F5A623]">Foundation</span>
    </h2>
    
    {/* Animated Underline */}
    <motion.span
      layoutClass="underline-foundation"
      className="absolute left-0 bottom-0 h-[4px] w-full bg-brandRed rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }} // Ensures it only animates once when scrolling down
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Sophisticated cubic-bezier
      style={{ transformOrigin: "center" }}
    />
  </div>
          {/* SVG Icon similar to the one in your screenshot */}
          <svg className="w-10 h-10 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 9H9V2H7V9H5V2H3V9c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          </svg>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed px-4">
          <p className="flex items-start justify-center gap-3">
            <span className="text-teal-600 mt-1"></span>
            <span>
              We understand the struggles of students, PG residents, and hostelers, 
              especially towards the end of the month when budgets get tight. 
              Many tend to skip meals or eat unhealthily.
            </span>
          </p>
          <p className="flex items-start justify-center gap-3">
            <span className="text-teal-600 mt-1"></span>
            <span>
              To solve this, Self-EY introduces a Subscription Plan that allows users 
              to manage their nutrition affordably.
            </span>
          </p>
        </div>
      </div>

      {/* PRICING CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-20 w-full max-w-7xl relative z-10">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="relative bg-white border border-slate-200 rounded-sm shadow-xl flex flex-col group transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Header Section */}
            <div className="relative flex items-center p-4">
              <div className={`${plan.accent} text-white font-bold tracking-widest px-4 py-2 w-full text-lg`}>
                {plan.name}
              </div>
              
              {/* Diamond Price Badge */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <div className="relative min-w-[75px] h-[75px] bg-[#1a2c42] border-2 border-slate-400 rotate-45 flex items-center justify-center shadow-xl">
                   <span className="transform -rotate-45 text-white font-bold text-lg">
                    {plan.price}
                   </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 pt-10 flex-grow">
              <h3 className="text-slate-500 font-bold mb-6 text-xs tracking-[0.2em] uppercase">
                {plan.subHeading}
              </h3>
              
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-700 text-sm gap-3 font-medium">
                    <span className={`mt-1.5 w-2 h-2 ${plan.accent} rotate-45 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer / Button Section */}
            <div className="p-8 mt-auto">
              <button className={`${plan.accent} w-full py-3 rounded-none text-white font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-md uppercase`}>
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;