import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Counter from "@/components/home/Counter";
import HomeGallery from "@/components/home/HomeGallery";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="bg-white">

      <Hero />

      <About />

      <WhyChooseUs />

      <Services />

      <Counter />

      <HomeGallery />

      <Testimonials />

      <CTA />

      <Contact />

    </main>
  );
}