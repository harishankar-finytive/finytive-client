
import {
  Calendar,
  ClipboardCheck,
  HeartHandshake,
  Layers,
  ShieldCheck,
} from "lucide-react";

export const ICON_MAP = {
  Calendar,
  ClipboardCheck,
  HeartHandshake,
  Layers,
  ShieldCheck,
};

export const HOME_TABS = [
  {
  id: "customer",
  label: "Customer",
  subtitle: "Delivering heartfelt care with home-style warmth and cultural authenticity.",
  highlightPhrase: "heartfelt care with home-style warmth and cultural authenticity",

  cards: [
    {
      cardStep: "01",
      cardTitle: "Service Availability",
      cardContent:
        "We list verified caretakers available daily for elder care, patient support, and assisted living. Families can explore trusted profiles and available time slots to find the right caregiver for their needs.",
      highlightPhrase: "verified caretakers",
      icon: "Calendar"
    },
    {
      cardStep: "02",
      cardTitle: "Easy Booking",
      cardContent:
        "Book caretakers based on your requirements — hourly, daily, or long-term care. Choose the type of assistance you need, confirm the schedule, and get reliable care delivered right to your home.",
      highlightPhrase: "hourly, daily, or long-term care",
      icon: "ClipboardCheck"
    },
    {
      cardStep: "03",
      cardTitle: "Personalized Care",
      cardContent:
        "Every family has unique needs. Our caretakers provide personalized support based on medical conditions, mobility requirements, and daily routines, ensuring comfort, safety, and dignity at all times.",
      highlightPhrase: "personalized support",
      icon: "HeartHandshake"
    },
    {
      cardStep: "04",
      cardTitle: "Flexible Care Plans",
      cardContent:
        "Our care plans are designed for families, working professionals, and seniors. Whether you need short-term assistance or ongoing support, we offer flexible plans that fit your schedule and lifestyle.",
      highlightPhrase: "flexible plans",
      icon: "Layers"
    },
    {
      cardStep: "05",
      cardTitle: "Affordable & Trusted",
      cardContent:
        "We believe quality care should be accessible. Our pricing is transparent and affordable, with verified caretakers and trusted service standards to give families complete peace of mind.",
      highlightPhrase: "transparent and affordable",
      icon: "ShieldCheck"
    }
  ]
}

  
];
