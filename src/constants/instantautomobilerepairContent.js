import {
  Hammer,
  Clock,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const ICON_MAP = {
  Hammer,
  Clock,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
};

export const HOME_TABS = [
  {
    id: "mechanics",
    label: "Mechanics",
    subtitle:
      "Instant automobile repair services delivered by trusted mechanics at your location.",
    cards: [
      {
        cardStep: "01",
        cardTitle: "Mechanic Availability",
        cardContent:
          "Find skilled mechanics available for instant repairs, diagnostics, and servicing. Whether it’s a breakdown, minor fix, or routine check, help is just a tap away.",
        highlightPhrase: "skilled mechanics",
        icon: "Hammer",
      },
      {
        cardStep: "02",
        cardTitle: "Quick Service Booking",
        cardContent:
          "Book a mechanic instantly by selecting your location, vehicle type, and issue. Get real-time confirmation and estimated arrival for faster assistance.",
        highlightPhrase: "mechanic instantly by selecting your location",
        icon: "ClipboardCheck",
      },
      {
        cardStep: "03",
        cardTitle: "On-Site Repairs",
        cardContent:
          "Our mechanics come directly to your location to inspect and repair your vehicle, saving you time and eliminating the need for towing in most cases.",
        highlightPhrase: "inspect and repair your vehicle",
        icon: "Clock",
      },
      {
        cardStep: "04",
        cardTitle: "Flexible Repair Services",
        cardContent:
          "From emergency roadside assistance and battery replacement to regular servicing and minor repairs, choose flexible services that fit your needs.",
        highlightPhrase: "battery replacement",
        icon: "Layers3",
      },
      {
        cardStep: "05",
        cardTitle: "Trusted & Verified Mechanics",
        cardContent:
          "All mechanics are background-verified and professionally trained. Transparent pricing, genuine parts, and service guarantees ensure complete peace of mind.",
        highlightPhrase: "verified and professionally trained",
        icon: "ShieldCheck",
      },
    ],
  },
];
