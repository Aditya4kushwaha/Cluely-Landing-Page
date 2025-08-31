import cluelyLogo from "../assets/cluelyLogo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-[#E1E4EF] relative flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 z-10">
        <div className="flex items-center space-x-2">
          <img
            src={cluelyLogo}
            alt="Cluely Logo"
            className="cursor-pointer w-auto h-7 sm:h-8 md:h-10"
          />
        </div>
        
        {/* Increased font size here */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-base md:text-lg">
          <a href="#pricing" className="hover:text-black transition-colors">
            Pricing
          </a>
          <a href="#enterprice" className="hover:text-black transition-colors">
            Enterprise
          </a>
          <a href="#footer" className="hover:text-black transition-colors">
            Careers
          </a>
          <a href="#footer" className="hover:text-black transition-colors">
            Connect
          </a>
        </nav>
        
        <button className="hidden md:block cursor-pointer bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
          <a href="#pricing">Get Started for Free</a>
        </button>

        <button
          className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="absolute top-16 sm:top-20 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-20 md:hidden shadow-lg">
          <nav className="flex flex-col space-y-4 p-4 sm:p-6">
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-black transition-colors font-medium py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#enterprice" 
              className="text-gray-700 hover:text-black transition-colors font-medium py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enterprise
            </a>
            <a 
              href="#footer" 
              className="text-gray-700 hover:text-black transition-colors font-medium py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </a>
            <a 
              href="#footer" 
              className="text-gray-700 hover:text-black transition-colors font-medium py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </a>
            <button className="w-full cursor-pointer bg-black text-white px-4 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mt-4">
              <a href="#pricing">Get Started for Free</a>
            </button>
          </nav>
        </div>
      )}

      <div className="flex flex-col items-center justify-center max-w-4xl mt-16 sm:mt-20 md:mt-24 z-10 px-3 sm:px-4">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold text-gray-900 leading-tight">
          Invisible AI That <br className="hidden sm:block" /> Thinks for You
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl">
          Cluely is an undetectable desktop app that gives you{" "}
          <br className="hidden sm:block" />
          the answers you didn't study for in every meeting{" "}
          <br className="hidden sm:block" />
          and conversation.
        </p>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-3 sm:right-4 md:right-10 z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl">↵</span>
        </div>
      </div>
    </div>
  );
}

