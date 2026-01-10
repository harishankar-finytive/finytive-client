import React from 'react'
import Banner from "../components/banner/Banner";
import Acting from "../assets/images/ActingDriver.png";
import TrainScroller from '../components/TrainScroller';

import FeatureSticky from "../components/ui/FeatureSticky";
import { HOME_TABS } from "../constants/actingdriverContent";
import stickeyImg from "../assets/images/ActingDriver.png";

export default function ActingDriver ()  {

  const actingDriverServices = [
  "Outstation Trips",
  "Daily Commute",
  "Night Shift Support",
  "Luxury Car Handling",
  "School Pickup/Drop",
  "Airport Transfers",
  "Event & Party Drivers",
  "Valet Services",
  "Elderly Assistance Drive"
];

  return (
    <div>

<Banner
  badge="Welcome to DriveMate"
  title="Drive on Your Schedule and"
  highlightedText="Earn Your Way"
  description="Supporting responsible drivers to offer flexible, on-demand driving services through digital platforms. We help you showcase reliability, reach customers easily, and build a steady income with professionalism and trust."
  buttonText="Start Driving Today"
  // image={Acting}
  imageSize="w-[300px] md:w-[360px]"
  stats={[
    { label: "Active Drivers", value: "8,500+" },
    { label: "On-Time Deliveries", value: "98%" }
  ]}
  serviceText="Flexible • Fast • Independent"
  experienceText="Connecting Drivers with Local Delivery & Ride Opportunities"
  clients={[
    "/driver1.png",
    "/driver2.png",
    "/driver3.png",
    "/driver4.png"
  ]}
/>



<FeatureSticky 
        titlePrefix="Why "
        titleBrand="Self-Ey"

        stickyImage={stickeyImg}
        tabs={HOME_TABS} 
   
      />

  <TrainScroller 
  items={actingDriverServices}
  title="Our Professional Driving Categories"
  subtitle="Experienced acting drivers for every journey, right on time."
  stationName="Self-Ey Junction"
  speedSeconds={28} // Balanced speed for a transport service
/>

    </div>
  )
}
