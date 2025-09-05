import cluelyLogo from "../assets/cluelyLogo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-[#E1E4EF] relative flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="grid-background" />

      {/* Header */}
      <motion.header
        className="absolute top-0 left-0 w-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-2">
          <motion.img
            src={cluelyLogo}
            alt="Cluely Logo"
            className="cursor-pointer w-auto h-7 sm:h-8 md:h-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

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
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-16 sm:top-20 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-20 md:hidden shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col space-y-4 p-4 sm:p-6">
            {["Pricing", "Enterprise", "Careers", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition-colors font-medium py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full cursor-pointer bg-black text-white px-4 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mt-4">
              <a href="#pricing">Get Started for Free</a>
            </button>
          </nav>
        </motion.div>
      )}

      {/* Hero Content */}
      <motion.div
        className="flex flex-col items-center justify-center max-w-4xl mt-16 sm:mt-20 md:mt-24 z-10 px-3 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-3 sm:right-4 md:right-10 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl">↵</span>
        </div>
      </motion.div>
    </div>
  );
}
