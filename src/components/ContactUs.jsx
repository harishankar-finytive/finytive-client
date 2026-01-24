import React, { useEffect, useRef, useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------- Static data ---------- */
const info = [
  {
    title: "Address",
    lines: ["Self-Ey", "T Nagar, Chennai, Tamil Nadu"],
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
  },
  {
    title: "Phone / WhatsApp",
    lines: ["+91 89251 92195"],
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v17a1.5 1.5 0 0 1-1.5 1.5H6.4l-4.2 2 .8-3.6V3.5Zm3 1.5v12.7l-.3 1.3 1.2-.6H20V5H5Z" />
      </svg>
    ),
  },
  {
    title: "Email",
    lines: ["balaji@selfey.in", "We reply within 24 hours"],
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.4 10-6.4V6a2 2 0 0 0-2-2Zm2 5.2-9.4 6a2 2 0 0 1-2.2 0L1 9.2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2Z" />
      </svg>
    ),
  },
  {
    title: "Working Hours",
    lines: ["Mon–Sat: 10:00 AM – 7:00 PM"],
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5v4.382l3.447 3.447-1.414 1.414L11 12.618V7Z" />
      </svg>
    ),
  },
];

/* ---------- Light animation only on section groups ---------- */
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.06,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ---------- Lazy map (only renders iframe when in view or clicked) ---------- */
const LazyMap = memo(function LazyMap({ src }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (prefersReduced) return; // users who prefer reduced motion → only show on click
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-black/5 bg-gray-50 shadow-inner"
    >
      <div className="relative w-full" style={{ paddingTop: "42%" }}>
        {!show ? (
          <button
            type="button"
            onClick={() => setShow(true)}
            className="absolute inset-0 flex items-center justify-center text-base md:text-lg bg-gradient-to-b from-white to-gray-50"
            aria-label="Load map"
          >
            <span className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 hover:bg-gray-50">
              Load map
            </span>
          </button>
        ) : (
          <iframe
            title="Self-Ey Location"
            className="absolute inset-0 h-full w-full"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </div>
  );
});

/* ---------- Contact form ---------- */
/* ---------- Updated ContactForm ---------- */
function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: POST to your backend endpoint
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    e.currentTarget.reset();
  }

  return (
    <form
      className="rounded-xl border border-black/5 bg-white shadow-sm p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-base outline-none border-brandOrange/20 placeholder:text-gray-400 focus:border-1 focus:border-brandOrange focus:shadow focus:shadow-orange-100"
            placeholder="Your name"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-base outline-none border-brandOrange/20 placeholder:text-gray-400 focus:border-1 focus:border-brandOrange focus:shadow focus:shadow-orange-100"
            placeholder="you@example.com"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="phone"
            className="text-base font-medium text-gray-900"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            pattern="^[0-9+\\-()\\s]{7,}$"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-base outline-none border-brandOrange/20 placeholder:text-gray-400 focus:border-1 focus:border-brandOrange focus:shadow focus:shadow-orange-100"
            placeholder="+91 89251 92195"
          />
        </div>

        {/* Replaced Subject input with Dropdown */}
        <div className="sm:col-span-1">
          <label htmlFor="role" className="text-base font-medium text-gray-900">
            I am a
          </label>
          <select
            id="role"
            name="role"
            required
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-base bg-white outline-none border-brandOrange/20 placeholder:text-gray-400 focus:border-1 focus:border-brandOrange focus:shadow focus:shadow-orange-100"
          >
            border 1 focus:border-brandOrange focus:shadow
            focus:shadow-orange-100<option value="">Select an option</option>
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-base font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 w-full resize-y rounded border border-gray-300 px-3 py-2 text-base outline-none border-brandOrange/20 placeholder:text-gray-400 focus:border-1 focus:border-brandOrange focus:shadow focus:shadow-orange-100"
            placeholder="Tell us about your query…"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          By submitting, you agree to our{" "}
          <a href="#terms" className="underline hover:text-gray-700">
            Terms
          </a>{" "}
          and{" "}
          <a href="#privacy" className="underline hover:text-gray-700">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded bg-brandOrange px-4 py-2.5 text-base font-semibold text-white transition hover:opacity-90"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

/* ---------- Main ---------- */
export default function ContactUsFast() {
  const prefersReduced = useReducedMotion();
  return (
    <main id="contact" className="w-full bg-white">
      {/* Hero */}
      <motion.section
        className="mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h1
          className="relative inline-block text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          variants={item}
        >
          Contact <span className="text-brandOrange">Self</span><span className="text-brandRed">-Ey</span>
          <motion.span
            layoutId="underline-contact"
            className="absolute left-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-brandOrange to-brandRed rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
          {/* <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-brandOrange/90" /> */}
        </motion.h1>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-gray-700"
          variants={item}
        >
          Questions, partnerships, or support—send us a message and we’ll get
          back to you.
        </motion.p>
      </motion.section>
      {/* Info + Form */}
      <section className="mx-auto px-4 sm:px-6 lg:px-25 pb-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Info cards (static, no motion to avoid jank) */}
          <div className="md:col-span-2 space-y-4">
            {info.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-black/5 bg-white shadow-sm p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded bg-gray-100 p-2 text-gray-900">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <div className="mt-1 text-base text-gray-700">
                      {card.lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918925192195"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-800 transition hover:bg-emerald-100"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 3.5A9.5 9.5 0 0 0 3.6 17.4L2 22l4.7-1.6A9.5 9.5 0 1 0 20 3.5ZM7.6 10.8c.2-.5.4-.5.8-.5h.6c.2 0 .4 0 .5.3l.4.8c.1.2.1.4 0 .6-.1.3-.5.8-1 1.3 1 .7 1.9 1.1 2.8 1.3.5-.6.9-1.2 1.1-1.6.1-.2.3-.2.5-.1l1 .5c.2.1.3.2.4.4.1.3.1 1.1-.3 1.5-.3.4-1.1.8-1.8.8-1.5.1-3.6-.7-5.3-2.4-1.7-1.7-2.5-3.8-2.4-5.3 0-.7.4-1.5.8-1.8.4-.4 1.2-.4 1.5-.3.2.1.3.2.4.4l.5 1c.1.2.1.4-.1.5-.4.2-1 .6-1.6 1.1Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form (single motion wrapper for the whole form) */}
          {/* <motion.div
            className="md:col-span-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div variants={item}>
              <ContactForm />
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* Map (lazy) */}
      <section className="mx-auto px-4 sm:px-6 lg:px-25 pb-12">
        <LazyMap src="https://www.google.com/maps?q=T%20Nagar%20Chennai&output=embed" />
        {prefersReduced && (
          <p className="mt-2 text-xs text-gray-500">
            Tip: Click “Load map” to view the embedded map.
          </p>
        )}
      </section>
    </main>
  );
}
