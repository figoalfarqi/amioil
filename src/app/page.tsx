import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Operations from "@/components/Operations";
import CompanySections from "@/components/CompanySections";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Carousel />
      <About />
      <VisionMission />
      <Operations />
      <CompanySections/>
      <Values />
      <Footer />
    </div>
  );
}
