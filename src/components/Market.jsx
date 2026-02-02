import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const OpenFairMarketplace = () => {
  return (
    <section className="bg-gray-50 py-12  ">
      <div className="px-4 sm:px-6 lg:px-25">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Open & Fair Marketplace
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          At Self-Ey, we believe in fairness and transparency. We do not fix prices
          for vendors. Service providers are free to set their own prices based on
          their skills, experience, and service quality. This open pricing model
          encourages healthy competition and builds trust for everyone.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vendor Pricing Card */}
          <div className="bg-brandBg rounded-xl shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Freedom for Service Providers
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              Vendors decide their own pricing based on their expertise, experience,
              and the quality of service they provide—ensuring fair earnings and
              dignity of work.
            </p>
          </div>

          {/* Customer Choice Card */}
          <div className="bg-brandBg rounded-xl shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              How Customers Choose Vendors
            </h3>
<ul className="text-gray-600 text-xl space-y-3">
  <li className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✓</span>
    Service pricing
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✓</span>
    Vendor ratings and reviews
  </li>
  <li className="flex items-center gap-2">
    <span className="text-green-500 font-bold">✓</span>
    Number of customers served through Self-Ey
  </li>
</ul>

          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 mt-8 text-lg">
          This approach empowers customers to make informed decisions while
          motivating service providers to continuously improve service quality.
        </p>
      </div>
    </section>
  );
};

export default OpenFairMarketplace;
