

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);

//   const navItems = [
//     { to: "/", label: "Home" },
//     { to: "about-us", label: "About Us" },
//     { to: "contact-us", label: "Contact Us" },
//   ];

//   const serviceItems = [
//     { to: "services/home-chef", label: "Home Chef" },
//     { to: "services/caretaker", label: "Caretaker" },
//     { to: "services/event-entertainment", label: "Event Entertainment" },
//     { to: "services/acting-driver", label: "Acting Driver" },
//     { to: "services/auto-repair", label: "Instant Auto Mobile Repair" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b-2 border-brandBg bg-white">
//       <div className="flex items-center  px-4 py-4 sm:px-6 lg:px-25">
//         {/* Brand */}
//         <NavLink to="/" className="text-3xl font-extrabold text-brandOrange">
//           Self<span className="text-brandRed">-Ey</span>
//         </NavLink>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-10">
//           <ul className="flex ms-65 items-center gap-8 text-base">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <NavLink
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `hover:text-brandOrange transition ${
//                       isActive ? "text-brandRed font-medium" : "text-gray-600"
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}

//             {/* Service Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServiceOpen(true)}
//               onMouseLeave={() => setServiceOpen(false)}
//             >
//               <span className="cursor-pointer text-gray-600 hover:text-brandOrange flex items-center gap-1">
//                 Service
//                 <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M5.25 7.5L10 12.25 14.75 7.5" />
//                 </svg>
//               </span>

//               <AnimatePresence>
//                 {serviceOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     className="absolute top-8 left-0 w-60 rounded-xl bg-white shadow-xl border py-2"
//                   >
//                     {serviceItems.map((item) => (
//                       <li key={item.to}>
//                         <NavLink
//                           to={item.to}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brandOrange"
//                         >
//                           {item.label}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden h-10 w-10 rounded-full border grid place-items-center"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/30"
//               onClick={() => setMenuOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <motion.nav
//               className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-4"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//             >
//               <ul className="space-y-2">
//                 {navItems.map((item) => (
//                   <li key={item.to}>
//                     <NavLink
//                       to={item.to}
//                       onClick={() => setMenuOpen(false)}
//                       className="block px-3 py-2 rounded hover:bg-gray-100"
//                     >
//                       {item.label}
//                     </NavLink>
//                   </li>
//                 ))}

//                 {/* Mobile Service Dropdown */}
//                 <li>
//                   <button
//                     onClick={() => setServiceOpen(!serviceOpen)}
//                     className="flex w-full items-center justify-between px-3 py-2 rounded hover:bg-gray-100"
//                   >
//                     Service
//                     <span>{serviceOpen ? "−" : "+"}</span>
//                   </button>

//                   <AnimatePresence>
//                     {serviceOpen && (
//                       <motion.ul
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="ml-4 mt-2 space-y-1 overflow-hidden"
//                       >
//                         {serviceItems.map((item) => (
//                           <li key={item.to}>
//                             <NavLink
//                               to={item.to}
//                               onClick={() => setMenuOpen(false)}
//                               className="block px-3 py-2 text-sm rounded hover:bg-gray-50"
//                             >
//                               {item.label}
//                             </NavLink>
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </li>
//               </ul>
//             </motion.nav>
//           </>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// Importing icons for a professional look
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

  const navItems = [
    { to: "/", label: "Home" },
    { to: "about-us", label: "About Us" },
    { to: "contact-us", label: "Contact Us" },
  ];

  // Added prefix icons to service items
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

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className=" flex items-center  px-6 py-4 mx-18">
        
        {/* Brand */}
        <NavLink to="/" className="text-3xl font-black tracking-tighter text-brandOrange">
          Self<span className="text-brandRed">-Ey</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-2 text-base font-medium px-20">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative overflow-hidden group px-5 py-2.5 flex flex-col justify-center rounded-lg transition-colors ${
                      isActive ? "text-brandRed" : "text-gray-600 hover:text-white"
                    }`
                  }
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    {item.label}
                  </span>
<div className="absolute inset-0 z-0 
bg-gradient-to-r from-orange-500 via-brandOrange to-yellow-400
translate-y-full group-hover:translate-y-0
rounded-t-[40%]
transition-all duration-700 ease-out" />




                </NavLink>
              </li>
            ))}

            {/* Service Dropdown */}
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
                    className="absolute top-full left-0 w-72 rounded-2xl bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 py-3 mt-2 overflow-hidden"
                  >
                    {serviceItems.map((item) => (
                      <motion.li key={item.to} variants={itemVariants}>
                        <NavLink
                          to={item.to}
                          className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-brandOrange hover:text-white transition-all duration-200 group"
                        >
                          <span className="text-brandOrange group-hover:text-white transition-colors">
                            {item.icon}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {item.label}
                          </span>
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger (Custom Shutter Icon) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden h-11 w-11 rounded-xl bg-gray-50 flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="h-0.5 w-6 bg-brandOrange block" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="h-0.5 w-6 bg-brandOrange block" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="h-0.5 w-6 bg-brandOrange block" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-brandBg/40 backdrop-blur-md z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.nav
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <ul className="space-y-6 mt-10">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-bold text-gray-800"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                <li className="pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="flex w-full items-center justify-between text-2xl font-bold text-gray-800"
                  >
                    Services
                    <ChevronDown className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-6 space-y-5 overflow-hidden"
                      >
                        {serviceItems.map((item) => (
                          <li key={item.to}>
                            <NavLink
                              to={item.to}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-4 text-lg font-medium text-gray-500"
                            >
                              <span className="text-brandOrange">{item.icon}</span>
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;