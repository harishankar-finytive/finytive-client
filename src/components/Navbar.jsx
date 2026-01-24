
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  HeartHandshake, 
  Music, 
  Car, 
  Wrench,
  ChevronDown 
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // 1. Rearranged and added Subscription
  const navItems = [
    { to: "/", label: "Home" },
    { to: "about-us", label: "About Us" },
    // Service is handled separately due to the dropdown logic
    { to: "contact-us", label: "Contact Us" },
    { to: "subscription", label: "Subscription" },
  ];

  const serviceItems = [
    { to: "home-chef", label: "Home Chef", icon: <UtensilsCrossed size={18} /> },
    { to: "care-taker", label: "Caretaker", icon: <HeartHandshake size={18} /> },
    { to: "event-entertainment", label: "Event Entertainment", icon: <Music size={18} /> },
    { to: "acting-driver", label: "Acting Driver", icon: <Car size={18} /> },
    { to: "auto-repair", label: "Instant Auto Mobile Repair", icon: <Wrench size={18} /> },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, staggerChildren: 0.05, delayChildren: 0.1 }
    },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-25 py-4 ">
        
        {/* Brand */}
        <NavLink to="/" className="text-3xl font-black tracking-tighter text-brandOrange">
          Self<span className="text-brandRed">-Ey</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 text-base font-medium">
            
            {/* Home & About Us */}
            {navItems.slice(0, 2).map((item) => (
              <li key={item.to}><NavItem item={item} /></li>
            ))}

            {/* Service Dropdown (Middle) */}
            <li
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <div className="cursor-pointer px-5 py-2.5 text-gray-600 hover:text-brandOrange flex items-center gap-2 transition-all">
                Service
                <motion.div animate={{ rotate: serviceOpen ? 180 : 0 }}>
                    <ChevronDown size={18} />
                </motion.div>
              </div>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 w-72 rounded-2xl bg-white shadow-xl border border-gray-100 py-3 mt-2 overflow-hidden"
                  >
                    {serviceItems.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-brandOrange hover:text-white transition-all duration-200 group"
                        >
                          <span className="text-brandOrange group-hover:text-white transition-colors">{item.icon}</span>
                          <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Contact Us & Subscription */}
            {navItems.slice(2).map((item) => (
              <li key={item.to}><NavItem item={item} /></li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden h-11 w-11 rounded-xl bg-gray-50 flex flex-col items-center justify-center gap-1.5"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="h-0.5 w-6 bg-brandOrange block" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="h-0.5 w-6 bg-brandOrange block" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="h-0.5 w-6 bg-brandOrange block" />
        </button>
      </div>

      {/* Mobile Menu Logic */}
      <AnimatePresence>
        {menuOpen && (
          <>
<motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/80 z-[60] md:hidden cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        {/* Subtle hint for the user: Clicking anywhere closes the menu */}
        <div className="absolute top-8 left-5 text-white text-xs font-medium tracking-widest uppercase">
          Tap to close
        </div>
      </motion.div>          
       <motion.nav 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-[80%] bg-white z-50 p-8 shadow-2xl"
            >
              <ul className="space-y-6 mt-12 bg-orange-400 p-3">
                {/* Home & About */}
                {navItems.slice(0, 2).map((item) => (
                  <li key={item.to}><MobileLink item={item} setMenuOpen={setMenuOpen} /></li>
                ))}
                
                {/* Service Toggle */}
                <li>
                  <button onClick={() => setServiceOpen(!serviceOpen)} className="flex w-full justify-between text-2xl font-bold text-gray-800">
                    Service <ChevronDown className={serviceOpen ? "rotate-180" : ""} />
                  </button>
                  {serviceOpen && (
                    <ul className="pl-4 mt-4 space-y-4">
                      {serviceItems.map(s => (
                        <li key={s.to}>
                           <NavLink to={s.to} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-lg text-gray-100">
                            {s.icon} {s.label}
                           </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Contact & Subscription */}
                {navItems.slice(2).map((item) => (
                  <li key={item.to}><MobileLink item={item} setMenuOpen={setMenuOpen} /></li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

// Reusable Desktop Link Component
const NavItem = ({ item }) => (
  <NavLink
    to={item.to}
    className={({ isActive }) =>
      `relative group px-6 py-2.5 flex items-center justify-center transition-all ${
        isActive ? "text-[#FF8A00] font-bold" : "text-gray-600 hover:text-[#FF8A00]"
      }`
    }
  >
    <span className="relative z-10">{item.label}</span>

    {/* The Sliding Underline */}
    <div 
      className="absolute bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-brandOrange to-brandRed
                 scale-x-0 transition-transform duration-500 ease-out
                 origin-right group-hover:origin-left group-hover:scale-x-100" 
    />
  </NavLink>
);

// Reusable Mobile Link Component
const MobileLink = ({ item, setMenuOpen }) => (
  <NavLink to={item.to} onClick={() => setMenuOpen(false)} className="text-2xl font-bold text-gray-800 block">
    {item.label}
  </NavLink>
);

export default Navbar;


