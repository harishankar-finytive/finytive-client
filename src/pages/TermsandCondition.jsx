import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="w-full bg-white px-4 sm:px-6 lg:px-25 py-12">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: May 1, 2025
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Self-EY</span>. These Terms
            & Conditions govern your access to and use of the Self-EY website,
            mobile application, and related services (collectively, the “Platform”).
            By accessing or using our Platform, you agree to be bound by these
            Terms. If you do not agree, please discontinue using Self-EY.
          </p>
        </section>

        {/* Use of Platform */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Use of the Platform
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You must use the Platform only for lawful purposes.</li>
            <li>
              You agree not to misuse, copy, modify, distribute, or attempt to
              reverse-engineer any part of the Platform.
            </li>
            <li>
              Self-EY services, including food subscriptions and service listings,
              must be used only as intended.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
          </ul>
        </section>

        {/* User Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              You must provide accurate and complete information when creating an
              account.
            </li>
            <li>
              You are responsible for all activities conducted through your
              account.
            </li>
            <li>
              Users must follow applicable subscription terms, delivery schedules,
              and payment obligations.
            </li>
            <li>
              Service providers and homemakers are responsible for complying with
              local food safety and hygiene standards.
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, trademarks, logos, designs, software, and other materials
            available on the Platform are owned by or licensed to Self-EY.
            Unauthorized use of any intellectual property is strictly prohibited.
          </p>
        </section>

        {/* Service Availability */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Service Availability
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              We strive to keep the Platform accessible at all times but do not
              guarantee uninterrupted or error-free operation.
            </li>
            <li>
              Self-EY may temporarily suspend or permanently discontinue services
              for maintenance, upgrades, or business reasons.
            </li>
          </ul>
        </section>

        {/* Payments */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Payments & Subscriptions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Payments made through Self-EY are processed using secure third-party
            payment gateways. By subscribing or making a payment, you agree to the
            applicable pricing, billing cycles, and refund policies displayed on
            the Platform.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Limitation of Liability
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Self-EY is not liable for losses caused by user error, service delays,
              or third-party failures.
            </li>
            <li>
              We do not guarantee the quality, availability, or suitability of
              services provided by independent service providers or food partners.
            </li>
            <li>
              To the maximum extent permitted by law, Self-EY shall not be liable
              for indirect or consequential damages.
            </li>
          </ul>
        </section>

        {/* Changes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms & Conditions from time to time. Continued use
            of the Platform after changes are published constitutes acceptance of
            the revised Terms.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms & Conditions, please
            contact us:
          </p>
          <p className="text-gray-700 font-medium">
            Email:{" "}
            <a
              href="mailto:balaji@selfey.in"
              className="text-brandOrange underline underline-offset-4"
            >
              balaji@selfey.in
            </a>
          </p>
        </section>

      </div>
    </main>
  );
};

export default TermsAndConditions;
