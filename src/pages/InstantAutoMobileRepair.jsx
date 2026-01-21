import React from 'react'
import auto from"../assets/images/AutoRepair.png"
import Banner from "../components/banner/Banner";
import TrainScroller from '../components/TrainScroller';
import FeatureSticky from "../components/ui/FeatureSticky";
import { HOME_TABS } from "../constants/instantautomobilerepairContent";
import stickeyImg from "../assets/images/auto-driving.png";


export default function InstantAutoMobileRepair ()  {

const mobileRepairServices = [
  "Engine Diagnostics",
  "Brake & Clutch Repair",
  "Battery Jumpstart",
  "Flat Tyre Support",
  "Oil & Filter Change",
  "Electrical Fixes",
  "Suspension Work",
  "Breakdown Assistance",
  "Pre-Purchase Inspection"
];

  return (
    <div>
        <Banner
  badge="Welcome to AutoConnect"
  title="Drive Your Auto and"
  highlightedText="Earn Independently"
  description="Supporting skilled technicians to offer fast, on-demand mobile repair services through digital platforms. We help you showcase expertise, reach customers easily, and build a steady income with professionalism and trust."
  buttonText="Start Driving Today"
  image={auto} 
  imageSize="w-88"
  // replace with auto-driver image if available
  stats={[
    { label: "Active Auto Drivers", value: "3,200+" },
    { label: "Passenger Satisfaction", value: "97%" }
  ]}
  serviceText="Local • Reliable • Affordable"
  experienceText="Connecting Passengers with Trusted Auto Drivers"
  clients={[
    "/passenger1.png",
    "/passenger2.png",
    "/passenger3.png",
    "/passenger4.png"
  ]}
/>


<FeatureSticky 
        titlePrefix="Why "
        titleBrand="Self-Ey"

        stickyImage={stickeyImg}
        tabs={HOME_TABS} 

      />

<TrainScroller 
  items={mobileRepairServices}
  title="On-Demand Repair Specialities"
  subtitle="Expert mechanics arriving at your location with a full toolkit."
  stationName="Self-Ey Junction"
  speedSeconds={28} 
/>
    </div>
  )
}
