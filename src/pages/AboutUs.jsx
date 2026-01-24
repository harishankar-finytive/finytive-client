import AboutSection from "../components/AboutSection"
import WhoWhatInteractive from "../components/WhoWhatInteractive"

import Banner from "../components/banner/Banner";
import Contact from "../assets/images/AboutBanner.png"

const AboutUs = () => {
  return (
    <div>
      <Banner
        badge="About Our Platform"
        title="Where Talent Meets"
        highlightedText="Opportunity"
        description="We empower talented individuals to showcase their skills, connect with the right opportunities, and earn independently — all through one unified platform."
        buttonText="Explore Our Journey"
        image={Contact}
        imageSize="w-[280px] md:w-[320px]"
        stats={[
          { label: "Skilled Individuals Empowered", value: "10,000+" },
          { label: "Services Launched", value: "6+" }
        ]}
        serviceText="Empower • Connect • Grow"
        experienceText="Our Journey Began with Homemade Food & Grew Into a Talent Platform"
        clients={[
          "/chef1.png",
          "/caretaker1.png",
          "/driver1.png",
          "/event1.png"
        ]}
      />

      <AboutSection />
      <WhoWhatInteractive />
    </div>
  )
}

export default AboutUs


// import React from "react";
// import AboutSection from "../components/AboutSection";
// import WhoWhatInteractive from "../components/WhoWhatInteractive";
// import Banner from "../components/banner/Banner";
// import Contact from "../assets/images/AboutBanner.png";

// const AboutUs = () => {
//   return (
//     <main>
//       <Banner
//         badge="About Our Platform"
//         title="Where Talent Meets"
//         highlightedText="Opportunity"
//         description="We empower talented individuals to showcase their skills, connect with the right opportunities, and earn independently — all through one unified platform."
//         buttonText="Explore Our Journey"
//         image={Contact}
//         // Added 'animate-spin-slow' here to trigger the clockwise rotation
//         imageSize="w-[280px] md:w-[320px] animate-spin-slow"
//         stats={[
//           { label: "Skilled Individuals Empowered", value: "10,000+" },
//           { label: "Services Launched", value: "6+" },
//         ]}
//         serviceText="Empower • Connect • Grow"
//         experienceText="Our Journey Began with Homemade Food & Grew Into a Talent Platform"
//         clients={[
//           "/chef1.png",
//           "/caretaker1.png",
//           "/driver1.png",
//           "/event1.png",
//         ]}
//       />

//       <AboutSection />
//       <WhoWhatInteractive />
//     </main>
//   );
// };

// export default AboutUs;


