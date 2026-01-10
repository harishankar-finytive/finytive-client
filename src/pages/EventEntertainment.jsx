import React from 'react'
import Banner from "../components/banner/Banner";
import Magic from "../assets/images/MagicianHeroImage.png";
import TrainScroller from '../components/TrainScroller';

import FeatureSticky from "../components/ui/FeatureSticky";
import { HOME_TABS } from "../constants/evententertainmentContent";
import stickeyImg from "../assets/images/magicianhero.png";


export default function EventEntertainment  () {

const entertainmentServices = [
  "Live Music & Bands",
  "Stand-up Comedy",
  "Magicians & Illusionists",
  "Professional DJs",
  "Dance Troupes",
  "Celebrity Appearances",
  "Photo & Video Booths",
  
];

  return (
    <div>
        
      <Banner
        badge="Welcome to EventSphere"
        title="Designing Memorable "
        highlightedText=" Event Moments"
        description="Helping creative performers turn their passion for entertainment into a successful digital service. From hosting and music to party activities, we guide you to promote, manage, and grow your event entertainment business online."
        buttonText="Join as an Event Partner"
        // image={Magic}
        imageSize="w-270"
        stats={[
          { label: "Events Managed", value: "5,000+" },
          { label: "Happy Clients", value: "97%" }
        ]}
        serviceText="Creative • Reliable • Professional"
        experienceText="Powering Events with Trusted Entertainment & Services"
        clients={[
          "/event1.png",
          "/event2.png",
          "/event3.png",
          "/event4.png"
        ]}
      />


<FeatureSticky 
        titlePrefix="Why "
        titleBrand="Self-Ey"

        stickyImage={stickeyImg}
        tabs={HOME_TABS} 
   
      />
      <TrainScroller 
  items={entertainmentServices}
  title="Self-Ey Event-Entertainment Categories"
  stationName="Self-Ey Junction"
  speedSeconds={28}
/>
    




    </div>
  )
}
