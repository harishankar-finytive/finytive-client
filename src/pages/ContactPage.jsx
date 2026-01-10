import ContactUs from "../components/ContactUs"
import Banner from "../components/banner/Banner";
import Contact from"../assets/images/Contact.png"

const ContactPage = () => {
  return (
    <>


    <Banner
  badge="Get in Touch"
  title="We’d Love to"
  highlightedText="Hear From You"
  description="Have questions, need support, or want to partner with HomeChef? Reach out to us anytime. Our team is here to help you with onboarding, orders, and growing your homemade food business."
  buttonText="Contact Us"
  // image={Contact}
  imageSize="w-120"
  stats={[
    { label: "Support Availability", value: "24/7" },
    { label: "Response Time", value: "< 2 hrs" }
  ]}
  serviceText="Support • Guidance • Partnerships"
  experienceText="Your Questions Matter to Us"
  clients={[
    "/support1.png",
    "/support2.png",
    "/support3.png",
    "/support4.png"
  ]}
/>

      <ContactUs />
    </>
  )
}


export default ContactPage