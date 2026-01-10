import React from "react";
import { Clock, Utensils, ShoppingCart, Truck, Recycle } from "lucide-react";

export default function HowItWorksSection({ onCTA }) {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-gradient-to-b from-amber-50 via-white to-emerald-50 py-14"
    >
      {/* Sticky info ribbon (stays while user scrolls inside this section) */}
      <div className="sticky top-0 z-40 mx-auto mb-8 w-full border-y border-amber-200 bg-amber-100/80 backdrop-blur supports-[backdrop-filter]:bg-amber-100/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
            <Clock className="h-4 w-4" />
            Daily Menu Window:{" "}
            <span className="rounded bg-amber-2 00 px-2 py-0.5">
              7:00 PM
            </span> –{" "}
            <span className="rounded bg-amber-200 px-2 py-0.5">9:30 AM</span>
          </div>
          <div className="hidden text-xs text-amber-900/80 md:block">
            No need to scroll up — everything you need is right here.
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 md:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-stone-600">
          Demand meets supply — ensuring{" "}
          <span className="font-semibold">no food waste</span>, while you enjoy
          truly homemade taste.
        </p>
      </div>

      {/* Steps grid */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3">
        <StepCard
          icon={<Utensils className="h-6 w-6" />}
          title="Daily Menu Reveal"
          accent="from-amber-200 to-amber-100"
          bullet={
            <>
              Homemakers reveal their{" "}
              <span className="font-semibold">secret menu</span> daily.
              <span className="ml-1 rounded bg-amber-200/80 px-2 py-0.5 text-xs">
                7:00 PM → 9:30 AM
              </span>
            </>
          }
        />

        <StepCard
          icon={<ShoppingCart className="h-6 w-6" />}
          title="Order Placement"
          accent="from-sky-200 to-sky-100"
          bullet="Place your order within the window — it’s first-come, first-served."
        />

        <StepCard
          icon={<Truck className="h-6 w-6" />}
          title="Delivery"
          accent="from-emerald-200 to-emerald-100"
          bullet="We deliver to your place — fresh, on time, and handled with care."
        />
      </div>

      {/* Zero-waste banner */}
      <div className="mx-auto mt-6 max-w-6xl px-4">
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <Recycle className="h-5 w-5 text-emerald-700" />
          <p className="text-sm text-emerald-900">
            <span className="font-semibold">Demand meets supply:</span>{" "}
            quantities are based on orders received to minimize waste — better
            for you, homemakers, and the planet.
          </p>
        </div>
      </div>

      {/* CTA dock (doesn’t push the page to top; anchors within the section) */}
      <div className="sticky bottom-4 z-40 mx-auto mt-10 flex max-w-6xl justify-center px-4">
        <button
          onClick={onCTA}
          className="w-full rounded-2xl bg-stone-900 px-6 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-95 md:w-auto"
        >
          See Today’s Menu & Order
        </button>
      </div>

      {/* Helper: in-page offset so linking to #how-it-works doesn’t hide headline behind sticky navs */}
      <style>{`
        #how-it-works{ scroll-margin-top: 88px; }
      `}</style>
    </section>
  );
}

function StepCard({ icon, title, bullet, accent }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-60 blur-2xl`}
      />
      <div className="relative flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-stone-900/90 text-white shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-stone-600">{bullet}</p>
        </div>
      </div>
    </div>
  );
}
