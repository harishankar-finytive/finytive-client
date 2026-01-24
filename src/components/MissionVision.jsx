import React from 'react';
import { Target, Lightbulb, HandHelping } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";



const InfoCard = ({ title, description, Icon, theme }) => {
  return (
    <div className="relative group h-full pt-4">
      
      {/* 1. Top Arrow Line */}
      <div className={`absolute -top-2 left-0 w-full flex items-center ${theme.text}`}>
        <div className="h-[1.5px] w-full bg-current opacity-80" />
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 -ml-1"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>

      {/* 2. Tray (The outer frame) */}
      <div className={`${theme.bg} rounded-xl shadow-lg p-[3px] pb-5 px-3 pt-0 h-full`}>
        
        {/* 3. White Content Box */}
        <div className="bg-white rounded-lg p-6 h-full flex flex-col">
          
          {/* ROW 1: Logo (Left) and Heading (Right) */}
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
            {/* Left side: Logo */}
            <div className={`${theme.text}`}>
              <Icon size={44} strokeWidth={1.5} />
            </div>

            {/* Right side: Heading */}
            <div className="text-right">
              <h3 className={`text-xl font-black uppercase tracking-widest ${theme.text}`}>
                {title}
              </h3>
              <div className={`h-1 w-12 ml-auto mt-1 rounded-full ${theme.bg} opacity-50`} />
            </div>
          </div>

          {/* ROW 2: Description */}
          <div className="flex-1">
            <p className="text-gray-700 text-[15px] leading-relaxed italic font-medium">
              {description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const MissionVisionValues = () => {
  const cardData = [
    {
      id: 1,
      title: "Mission",
      description: "To empower skilled individuals — especially homemakers and local talent — by providing them with a digital platform that transforms their passion into sustainable income. We aim to make self-employment simple, dignified, and accessible for everyone.",
      Icon: Target,
      theme: {
        bg: "bg-[#F5A623]",
        text: "text-[#F5A623]",
      },
    },
    {
      id: 2,
      title: "Vision",
      description: "To become India’s leading self-employment platform — connecting hidden talent across every community with people who need their services. A future where anyone can start a business from home using just a phone and their skills — that’s the Self-EY dream.",
      Icon: Lightbulb,
      theme: {
        bg: "bg-[#1B365D]",
        text: "text-[#1B365D]",
      },
    },
    {
      id: 3,
      title: "Values",
      description: "Empowerment — Creating real earning opportunities for self-reliant individuals. Authenticity — Promoting genuine, homemade, and heartfelt services. Community — Building trust and local connections between customers and service providers.",
      Icon: HandHelping,
      theme: {
        bg: "bg-[#B22222]",
        text: "text-[#B22222]",
      },
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="px-4 sm:px-6 lg:px-25">
        <div className="text-center mb-20">
  {/* Wrap in a relative div to contain the absolute underline if needed, 
      or use a standard block layout */}
  <div className="relative inline-block">
    <h2 className="text-5xl font-black text-slate-900 tracking-tight pb-4">
      Our <span className="text-[#F5A623]">Foundation</span>
    </h2>
    
    {/* Animated Underline */}
    <motion.span
      layoutClass="underline-foundation"
      className="absolute left-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-brandOrange to-brandRed rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }} // Ensures it only animates once when scrolling down
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Sophisticated cubic-bezier
      style={{ transformOrigin: "center" }}
    />
  </div>


          <p className="text-slate-500 mt-4 text-lg">Built on trust, community, and empowerment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {cardData.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              theme={card.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;