import {
  CalendarDays,
  TicketCheck,
  Mic2,
  Layers3,
  BadgeCheck,
} from "lucide-react";

export const ICON_MAP = {
  CalendarDays,
  TicketCheck,
  Mic2,
  Layers3,
  BadgeCheck,
};

export const HOME_TABS = [
  {
    id: "audience",
    label: "Audience",
    subtitle:
      "Creating unforgettable entertainment experiences with seamless booking and trusted performers.",
    cards: [
      {
        cardStep: "01",
        cardTitle: "Event Discovery",
        cardContent:
          "Explore a wide range of live events, performances, and entertainment options happening near you. Discover concerts, private shows, cultural performances, and more, all curated for quality experiences.",
        highlightPhrase: "live events, performances",
        icon: "CalendarDays",
      },
      {
        cardStep: "02",
        cardTitle: "Easy Booking",
        cardContent:
          "Book artists, performers, or event experiences effortlessly. Choose your preferred date, venue type, and performance duration, then confirm your booking in just a few simple steps.",
        highlightPhrase: "confirm your booking",
        icon: "TicketCheck",
      },
      {
        cardStep: "03",
        cardTitle: "Curated Entertainment",
        cardContent:
          "From musicians and DJs to comedians and cultural artists, we offer curated entertainment tailored to your event’s theme, audience size, and vibe.",
        highlightPhrase: "curated entertainment",
        icon: "Mic2",
      },
      {
        cardStep: "04",
        cardTitle: "Flexible Event Packages",
        cardContent:
          "Whether it’s a private party, corporate event, wedding, or large celebration, our flexible entertainment packages adapt to your schedule, budget, and event requirements.",
        highlightPhrase: "flexible entertainment packages",
        icon: "Layers3",
      },
      {
        cardStep: "05",
        cardTitle: "Trusted & Verified Artists",
        cardContent:
          "All performers are vetted for quality and professionalism. Transparent pricing, verified profiles, and reliable service standards ensure a stress-free and memorable event experience.",
        highlightPhrase: "quality and professionalism",
        icon: "BadgeCheck",
      },
    ],
  },
];
