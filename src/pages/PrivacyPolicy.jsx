import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="w-full bg-white px-4 sm:px-6 lg:px-25 py-12">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: November 13, 2025
          </p>
        </header>

        {/* Company Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-brandOrange">
            About Self-EY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Self-EY is a platform built to empower individuals by connecting talent
            with opportunity. We understand that many skilled people often go
            unnoticed, while students, PG residents, and hostelers struggle with
            access to affordable and healthy food—especially towards the end of the
            month.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our journey began with one of the most heartfelt and essential needs:
            homemade food. Today, Self-EY brings everything together under one roof,
            enabling users to access reliable services while supporting local talent
            and self-employment.
          </p>
        </section>

        {/* Information Collection */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            How We Collect Information
          </h2>
          <p className="text-gray-700">
            As part of providing our services, Self-EY may collect the following
            information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Name, mobile number, email address, and basic profile details.</li>
            <li>
              Communications with us, including messages, feedback, inquiries, or
              support requests.
            </li>
            <li>
              Location-based data (GPS coordinates) when required to deliver
              location-specific services. We may use Google Maps APIs for this
              functionality, and data may be processed in accordance with Google’s
              Privacy Policy.
            </li>
            <li>
              Biometric data such as facial images, only if required for secure
              authentication features.
            </li>
            <li>
              Usage-related data such as service access times or activity logs to
              improve platform performance.
            </li>
          </ul>
        </section>

        {/* Use of Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use collected information to operate, maintain, and improve Self-EY’s
            services. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Providing access to services and subscriptions.</li>
            <li>Improving user experience and platform functionality.</li>
            <li>Ensuring security, authentication, and fraud prevention.</li>
            <li>Responding to user queries and support requests.</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Self-EY does not sell or rent your personal data. Your information is
            shared only when necessary to provide our services or comply with legal
            obligations.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance user experience,
            analyze usage, and improve site performance. You can manage cookie
            preferences through your browser settings.
          </p>
        </section>

        {/* Payments */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Payments & Financial Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Payments on Self-EY are processed securely through Razorpay, a trusted
            third-party payment gateway. Self-EY does not store sensitive payment
            information such as card numbers, CVV, or UPI PINs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Razorpay may collect transaction details, device data, and IP address
            for fraud prevention and compliance purposes. By completing a payment,
            you agree to Razorpay’s Privacy Policy.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page, and the updated policy will apply from the date of
            publication.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy or your data, please
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

export default PrivacyPolicy;
