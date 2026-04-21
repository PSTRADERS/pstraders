import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Properties />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
