import About from "@/component/About";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Ready from "@/component/Ready";
import Service from "@/component/Service";
import Touch from "@/component/Touch";
import Wat from "@/component/Wat";
import Why from "@/component/Why";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Wat />
      <About />
      <Service />
      <Why />
      <Ready />
      <Touch />
      <Footer />
    </div>
  );
}
