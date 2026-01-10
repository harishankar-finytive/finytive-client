// NotFound.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] w-full bg-white">
      <section className="mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 text-center">
        {/* Code badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full bg-brandOrange" />
          404 — Page Not Found
        </div>

        {/* Big heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Oops! We can’t find that page.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-gray-700">
          The link may be broken or the page might have moved. Try the options below.
        </p>

        {/* Illustration (lightweight SVG) */}
        <div className="mx-auto mt-10 w-full max-w-xl">
          <svg
            viewBox="0 0 600 280"
            className="h-auto w-full text-gray-200"
            aria-hidden="true"
          >
            <rect x="30" y="50" width="540" height="160" rx="16" className="fill-gray-100" />
            <g className="stroke-gray-300" strokeWidth="2" fill="none">
              <path d="M70 90h200M70 115h160M70 140h180M70 165h140" />
              <path d="M330 100h180M330 130h140M330 160h120" />
            </g>
            <g className="text-brandOrange fill-current">
              <circle cx="300" cy="230" r="6" />
              <circle cx="330" cy="230" r="6" />
              <circle cx="270" cy="230" r="6" />
            </g>
            <text
              x="300"
              y="38"
              textAnchor="middle"
              className="fill-brandOrange"
              style={{ fontSize: 20, fontWeight: 700 }}
            >
              404
            </text>
          </svg>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-brandOrange px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Go back home
          </NavLink>
          <NavLink
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Contact support
          </NavLink>
        </div>

        {/* Quick links */}
        <div className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
            <li>
              <NavLink to="/about-us" className="hover:text-black">About Us</NavLink>
            </li>
            <span className="h-3 w-px bg-gray-300" />
            <li>
              <NavLink to="/services" className="hover:text-black">Services</NavLink>
            </li>
            <span className="h-3 w-px bg-gray-300" />
            <li>
              <NavLink to="/products" className="hover:text-black">Products</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
