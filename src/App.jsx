import EnterpriseSection from "./components/Enterprice";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Pricing from "./components/Pricing";
import './App.css'


export default function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Pricing />
      <EnterpriseSection/>
      <Footer/>
    </div>
  );
}
