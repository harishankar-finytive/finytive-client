import React from "react";
import { NavLink } from "react-router-dom";



const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="w-full border-t border-gray-200 bg-[#333333]">
      {/* Top: Brand + Columns */}
      <div className=" px-4 sm:px-6 lg:px-25 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand / About */}
          <div className="space-y-4">
            <NavLink to="#home" className="inline-flex items-center gap-2">
              <span className="text-3xl font-extrabold"><span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span></span>

            </NavLink>
            <p className="text-sm leading-relaxed text-gray-100">
              Selfey is a self-employment platform designed to empower local talent by connecting skilled individuals with genuine, income-generating opportunities. We believe that every skill has value, and everyone deserves a chance to earn with dignity. Selfey is not just a platform — it’s an opportunity to grow, earn, and succeed on your own terms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-16 lg:ml-24">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li> SELF-EY E-SERVICES PVT LTD</li>
              <li>
                <span className="block">Email: <a href="mailto:balaji@selfey.in" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Info@selfey.in</a></span>
              </li>
              <li>Phone: +91 9600074294</li>
              <li>Office Address: Plot No:90, 3rd Cross St, Phase-2, Thirumalai Nagar Annexe, Perungudi, Chennai, Tamil Nadu 600096</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-25 py-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-gray-100">
            © {year} <span className="font-semibold text-gray-200">Self-Ey</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <NavLink to="privacy-policy" className="text-gray-100 hover:text-white">Privacy Policy</NavLink>
            <span className="h-3 w-px bg-gray-300" />
            <NavLink to="terms-condition" className="text-gray-100 hover:text-white">Terms</NavLink>
            <span className="h-3 w-px bg-gray-300" />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center text-gray-100 hover:text-white"
            >
              Back to top
              <svg className="ml-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7z" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
