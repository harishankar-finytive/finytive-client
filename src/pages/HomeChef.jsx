import React from "react";
import Banner from "../components/banner/Banner";
// import FeatureGrid from "../components/sections/featuregrid/FeatureGrid";
// import { homeChefFeatures } from "../data/homeChefFeatures";
import StickyDiv from "../components/StickyDiv";
import TrainFoodSection from "../components/TrainSection";

import Comparison from "../components/Comparision";
import chef from"../assets/images/CookHeroImage.webp"


const cardDetails = [
  {
    cardStep: "01",
    cardTitle: "Daily Menu Reveal",
    cardContent:
      "We reveal our homemakers’ secret menu every day from 7 PM to 9:30 AM the every morning. You can explore a variety of fresh, home-cooked dishes announced each evening. A new surprise every day just for you!",
  },
  {
    cardStep: "02",
    cardTitle: "Order Placement",
    cardContent:
      "We deliver your food directly to your doorstep, ensuring zero waste and maximum freshness. Each of our homemakers specializes in a signature dish — for Example, Chicken Gravy. Customers can order their favorite dish with the desired number of servings.",
  },
  {
    cardStep: "03",
    cardTitle: "Cultural Preferences",
    cardContent:
      "We prepare food that reflects your unique cultural and regional preferences, If you love your traditional cuisine, we offer customized options so you can enjoy an authentic, home-style experience that feels just right.",
  },
  {
    cardStep: "04",
    cardTitle: "Subscription Module",
    cardContent:
      "We designed our subscription plans with you in mind — perfect for students, hostel residents, and working professionals. We understand your monthly budget constraints, so we offer affordable meal plans to make sure you never have to compromise on nutrition or taste.",
  },
  {
    cardStep: "05",
    cardTitle: "Affordable Plans",
    cardContent:
      "We care about your taste and your budget. Enjoy 6 full meals (veg or non-veg) for just ₹999 per month — valid for 30 days. You get consistent, comforting home-style food without any financial stress.",
  },
];


export default function HomeChef() {
  return (
    <div>
      <Banner
        badge="Welcome to HomeChef"
        title="Turning Home Cooking into a"
        highlightedText="Healthy Business"
        description="Empowering home chefs and housewives to sell fresh, healthy, homemade food online. We support you at every step—cooking, marketing, and growing your digital presence—so you can build a trusted food business with confidence."
        buttonText="Start Selling Today"
        image={chef}
        stats={[
          { label: "Daily Orders", value: "250+" },
          { label: "Customer Trust", value: "98%" }
        ]}
        serviceText="Fresh • Healthy • Homemade"
        experienceText="We Help You Cook, Sell & Grow Digitally"
        clients={[
          "/chef1.png",
          "/chef2.png",
          "/chef3.png",
          "/chef4.png"
        ]}
      />

      <StickyDiv
        philo="Delivering home-style meals with love and cultural authenticity."
        cardDetails={cardDetails} 
      />
            <TrainFoodSection />

   <Comparison />
    </div>
    



  );
}
