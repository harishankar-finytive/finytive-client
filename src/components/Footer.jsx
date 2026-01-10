import React from "react";
import { NavLink } from "react-router-dom";

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
      <div className="mx-auto px-4 sm:px-6 lg:px-25 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand / About */}
          <div className="space-y-4">
            <NavLink to="#home" className="inline-flex items-center gap-2">
              <span className="text-2xl font-extrabold"><span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span></span>
             
            </NavLink>
            <p className="text-sm leading-relaxed text-gray-100">
              Bringing home-cooked warmth to those away from home while empowering homemakers and
              local talents with real opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
              <li>
                <span className="block">Email: <a href="mailto:balaji@selfey.in" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">balaji@selfey.in</a></span>
              </li>
              <li>Phone: +91 89251 92195</li>
              <li>Chennai, Tamil Nadu</li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-300">
              Get updates about new home chefs and local services.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex w-full items-center gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-brandOrange/20 placeholder:text-gray-400 focus:ring-4"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brandOrange px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Join
              </button>
            </form>
           
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-300 transition hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.75 6a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 transition hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5ZM3 8.25h3.96V21H3ZM9.75 8.25H13v1.74h.05a3.56 3.56 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.17V21h-3.96v-5.65c0-1.35 0-3.08-1.88-3.08s-2.17 1.47-2.17 2.98V21H9.75Z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 transition hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 7.5a4 4 0 0 0-2.8-2.8C18.6 4 12 4 12 4s-6.6 0-8.7.7A4 4 0 0 0 .5 7.5 41.5 41.5 0 0 0 0 12a41.5 41.5 0 0 0 .5 4.5 4 4 0 0 0 2.8 2.8C5.4 20 12 20 12 20s6.6 0 8.7-.7a4 4 0 0 0 2.8-2.8A41.5 41.5 0 0 0 24 12a41.5 41.5 0 0 0-.5-4.5ZM9.75 15.02V8.98L15.5 12Z" />
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="text-gray-300 transition hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21l-6.62 7.56L22.5 22h-6.937l-4.848-6.351L4.98 22H2l7.106-8.123L1.5 2h6.937l4.532 5.928L18.244 2Zm-2.43 18h1.8L8.34 4h-1.8l9.274 16Z" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-25 py-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-gray-100">
            © {year} <span className="font-semibold text-gray-200">Self-Ey</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <NavLink to="#privacy" className="text-gray-100 hover:text-white">Privacy Policy</NavLink>
            <span className="h-3 w-px bg-gray-300" />
            <NavLink to="#terms" className="text-gray-100 hover:text-white">Terms</NavLink>
            <span className="h-3 w-px bg-gray-300" />
            <a href="#home" className="inline-flex items-center text-gray-100 hover:text-white">
              Back to top
              <svg className="ml-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
