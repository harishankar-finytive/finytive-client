import {
  Car,
  CalendarClock,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const ICON_MAP = {
  Car,
  CalendarClock,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
};

export const HOME_TABS = [
  {
    id: "drivers",
    label: "Drivers",
    subtitle:
      "Reliable part-time drivers to safely drive your vehicle whenever you need.",
    cards: [
      {
        cardStep: "01",
        cardTitle: "Driver Availability",
        cardContent:
          "Find trained part-time drivers available for hourly, daily, or short-term needs. Whether it’s personal travel, office commute, or errands, get a driver when you need one.",
        highlightPhrase: "part-time drivers",
        icon: "Car",
      },
      {
        cardStep: "02",
        cardTitle: "Easy Booking",
        cardContent:
          "Book a driver in just a few steps. Select your time slot, pickup location, and trip duration, then confirm instantly through our simple booking process.",
        highlightPhrase: "simple booking process",
        icon: "ClipboardCheck",
      },
      {
        cardStep: "03",
        cardTitle: "Drive Your Vehicle",
        cardContent:
          "Our acting drivers operate your own vehicle, ensuring familiarity, comfort, and convenience while you relax or focus on your work.",
        highlightPhrase: "drivers operate your own vehicle",
        icon: "CalendarClock",
      },
      {
        cardStep: "04",
        cardTitle: "Flexible Driving Plans",
        cardContent:
          "Choose from flexible driving plans designed for individuals, families, and professionals. From one-time trips to recurring schedules, we adapt to your needs.",
        highlightPhrase: "flexible driving plans",
        icon: "Layers3",
      },
      {
        cardStep: "05",
        cardTitle: "Safe & Verified Drivers",
        cardContent:
          "All drivers are background-verified, trained, and trusted. Transparent pricing and safety protocols ensure peace of mind every time you book.",
        highlightPhrase: "pricing and safety protocols",
        icon: "ShieldCheck",
      },
    ],
  },
];
