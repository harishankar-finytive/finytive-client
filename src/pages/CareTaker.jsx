import React from 'react'
import Banner from "../components/banner/Banner";
import Care from "../assets/images/CareTakerHeroImage.png";
import TrainScroller from '../components/TrainScroller';

import FeatureSticky from "../components/ui/FeatureSticky";
import { HOME_TABS } from "../constants/caretakerContent";
import stickeyImg from "../assets/images/CareTakerHeroImage.png";

export default function CareTaker ()  {


const caretakerServices = [
  "Elderly Care",
  "Child Nursing",
  "Post-Op Recovery",
  "Special Needs Support",
  "Physiotherapy",
  "Dementia Care",
  "Newborn Care"
];  return (
    <div>
        <Banner
  badge="Welcome to CareConnect"
  title="Empowering Quality"
  highlightedText="Care Taker Services"
  description="Enabling compassionate individuals and homemakers to offer reliable caretaker services online. We help you present your skills professionally, connect with families in need, and grow a trusted caregiving service with ease and confidence."
  buttonText="Join as a Caretaker"
  // image={Care}
  imageSize="w-70"
  stats={[
    { label: "Active Caretakers", value: "1,200+" },
    { label: "Families Trusted", value: "99%" }
  ]}
  serviceText="Safe • Compassionate • Reliable"
  experienceText="Connecting Families with Trusted Care Professionals"
  clients={[
    "/family1.png",
    "/family2.png",
    "/family3.png",
    "/family4.png"
  ]}
/>

 {/* <StickyDiv
        philo="Delivering home-style meals with love and cultural authenticity."
        cardDetails={cardDetails} 
      /> */}


<FeatureSticky 
        titlePrefix="Why "
        titleBrand="Self-Ey"

        stickyImage={stickeyImg}
        tabs={HOME_TABS} 

      />
<TrainScroller 
  items={caretakerServices}
  title="Self-Ey CareTaker Categories"
  stationName="Self-Ey Junction"
  speedSeconds={28}
/>


      
    </div>
  )
}
