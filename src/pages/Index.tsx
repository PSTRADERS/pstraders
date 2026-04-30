import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

import Rentals from "@/components/Rentals";
import Deals from "@/components/Deals";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Landlords />
      <Rentals />
      <Deals />
      <Partners />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
