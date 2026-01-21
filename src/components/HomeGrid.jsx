import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. IMPORT YOUR IMAGES HERE
 import chefImg from "../assets/images/indianCur.png";
 import careImg from "../assets/images/CareTakerHeroImage.png";
 import eventImg from "../assets/images/magicianhero.png";

import driverImg from "../assets/images/actingDriver.png";
import repairImg from "../assets/images/auto-driving.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Home Chef",
    subtitle: "Fresh Meals",
    details: "Professional chefs preparing customized gourmet meals in your kitchen.",
    image: chefImg, // Replace with imported chefImg
    color: "bg-amber-400",
    path: "/home-chef",

  },
  {
    id: 2,
    title: "Care Taker",
    subtitle: "Elder Care",
    details: "Compassionate support for your loved ones with medical and daily needs.",
    image: careImg, // Replace with imported careImg
    color: "bg-amber-400",
    path: "/care-taker",

  },
  {
    id: 3,
    title: "Entertainment",
    subtitle: "Music & Shows",
    details: "Live performers and DJs to make your celebrations unforgettable.",
    image: eventImg, // Replace with imported eventImg
    color: "bg-amber-400",
    path: "/event-entertainment",

  },
  {
    id: 4,
    title: "Acting Driver",
    subtitle: "On-Demand",
    details: "Reliable drivers available 24/7 for short trips or long journeys.",
    image: driverImg, // Replace with imported driverImg
    color: "bg-amber-400",
    path: "/acting-driver",

  },
  {
    id: 5,
    title: "Auto Repair",
    subtitle: "Mobile Service",
    details: "On-the-spot vehicle diagnostics and repairs wherever you are.",
    image: repairImg, // Replace with imported repairImg
    color: "bg-amber-400",
    path: "/auto-repair",

  },
];

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);



  return (
    <motion.div
      onClick={() => navigate(service.path)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative w-full h-[340px] rounded-[2rem] p-3 ${service.color} shadow-lg cursor-pointer`}
      whileHover={{ y: -10 }}
    >
      {/* HEADER BAR (Number + Title) */}
      <div className="flex items-center mb-3 text-white px-2">
        <div className="text-2xl font-bold pr-3 border-r border-white/40 mr-3">
          {service.id}
        </div>
        <div className="text-[13px] font-bold uppercase tracking-wider truncate">
          {service.title}
        </div>
       
      </div>

      {/* WHITE BODY AREA */}
      <div className="bg-white rounded-[1.8rem] h-[calc(100%-3.5rem)] w-full p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!hovered ? (
            /* DEFAULT VIEW (Image + Placeholder Text) */
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center"
            >
              {/* IMAGE CALL */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-30 h-30 object-contain mb-4"
              />
              <p className="text-[15px] text-black leading-tight uppercase tracking-widest font-semibold">
                Instant Service
              </p>
              <p className="text-[15px] text-black mt-2 px-2">
                Click or hover to learn more about our {service.title}
              </p>
            </motion.div>
          ) : (
            /* HOVER VIEW (Details) */
            <motion.div
              key="hover"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="px-2"
            >
              <h4 className={`text-sm font-black mb-3 uppercase ${service.color.replace('bg-', 'text-')}`}>
                {service.subtitle}
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-700 font-medium">
                {service.details}
              </p>
              <div className="mt-4 flex justify-center">
                <div className={`w-8 h-8 rounded-full ${service.color} text-white flex items-center justify-center`}>
                  →
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-20">
  {/* Wrap in a relative div to contain the absolute underline if needed, 
      or use a standard block layout */}
  <div className="relative inline-block">
    <h2 className="text-5xl font-black text-slate-900 tracking-tight pb-4">
      Our <span className="text-[#F5A623]">Services</span>
    </h2>
    
    {/* Animated Underline */}
    <motion.span
      layoutId="underline-foundation"
      className="absolute left-0 bottom-0 h-[4px] w-full bg-brandRed rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }} // Ensures it only animates once when scrolling down
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Sophisticated cubic-bezier
      style={{ transformOrigin: "center" }}
    />
  </div>


          
          <p className="text-gray-500 mt-2">Professional help at your doorstep</p>
        </div>

        {/* 5 Card Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;