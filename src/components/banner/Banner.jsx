// import FloatingCard from "./FloatingCard";
// import AvatarGroup from "./AvatarGroup"

// const Banner = ({
//   badge = "",
//   title = "",
//   highlightedText = "",
//   description = "",
//   buttonText = "",
//   image = "",
//   imageSize = "", // 👈 default size
//   stats = [],
//   serviceText = "",
//   experienceText = "",
//   clients = []
// }) => {

//   return (
//     <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-25 ">
//       <div className="  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           <span className="inline-block mb-4 px-4 py-1 text-sm text-brandRed border border-orange-200 rounded-full">
//             {badge}
//           </span>

//           <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold  text-gray-900">
//             {title}{" "}
//             <span className="text-brandOrange">{highlightedText}</span>
//           </h1>

//           <p className="mt-6 max-w-xl text-gray-500 text-lg">
//             {description}
//           </p>

//           <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 transition">
//             {buttonText}
//             <span>→</span>
//           </button>
//         </div>

//         {/* RIGHT VISUAL */}
//         <div className="relative flex justify-center">
          
//           {/* Gradient Circle */}
//           <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-brandOrange to-brandRed flex items-center justify-center">
//    <img
//   src={image}
//   alt="Banner Visual"
//   className={`${imageSize} h-250 object-contain`}
// />
//           </div>

//           {/* Floating Cards */}
//           <FloatingCard
//             position="top-3 -left-10"
//             title="Overall Activity"
//             stats={stats}
//           />

//           <FloatingCard
//             position="bottom-2 -left-3"
//             text={serviceText}
//             icon
//           />

//           <FloatingCard
//             position="-top-2 -right-23"
//             text={experienceText}
//             icon
//           />

//           <FloatingCard position="bottom-10 right-0">
//   <AvatarGroup users={clients} />
// </FloatingCard>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


import FloatingCard from "./FloatingCard";
import AvatarGroup from "./AvatarGroup"

const Banner = ({
  badge = "",
  title = "",
  highlightedText = "",
  description = "",
  buttonText = "",
  image = "",
  imageSize = "", // 👈 default size
  stats = [],
  serviceText = "",
  experienceText = "",
  clients = []
}) => {

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-25 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <span className="inline-block mb-4 px-4 py-1 text-sm text-brandRed border border-orange-200 rounded-full">
        {badge}
      </span>

      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900">
        {title}{" "}
        <span className="text-brandOrange">{highlightedText}</span>
      </h1>

      <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-500 text-base sm:text-lg">
        {description}
      </p>

      <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 transition">
        {buttonText}
        <span>→</span>
      </button>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative flex justify-center">
      
      {/* Gradient Circle */}
      <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-br from-brandOrange to-brandRed flex items-center justify-center">
        <img
          src={image}
          alt="Banner Visual"
          className={`${imageSize} h-auto object-contain`}
        />
      </div>

      {/* Floating Cards (hidden on very small screens) */}
      <div className="hidden sm:block">
        <FloatingCard
          position="top-3 -left-10"
          title="Overall Activity"
          stats={stats}
        />

        <FloatingCard
          position="bottom-2 -left-3"
          text={serviceText}
          icon
        />

        <FloatingCard
          position="-top-2 -right-20"
          text={experienceText}
          icon
        />

        <FloatingCard position="bottom-10 right-0">
          <AvatarGroup users={clients} />
        </FloatingCard>
      </div>
    </div>
  </div>
</section>
  );
};

export default Banner;







