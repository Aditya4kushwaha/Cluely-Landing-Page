import { Check, Info, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const [platformOpen, setPlatformOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setPlatformOpen(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = { scale: 1.05 };
  const buttonTap = { scale: 0.95 };

  return (
    <div
      id="pricing"
      className="w-full bg-[#E1E4EF] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Starter */}
          <motion.div
            className="rounded-2xl p-6 sm:p-8 flex flex-col bg-gray-50/80 border border-gray-200 shadow-sm backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Free
            </p>

            <div className="relative mt-6">
              <button
                onClick={() => setPlatformOpen(!platformOpen)}
                className="cursor-pointer w-full flex items-center justify-between bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <span>Get for Windows</span>
                <ChevronDown size={20} />
              </button>

              <AnimatePresence>
                {platformOpen && (
                  <motion.ul
                    className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {["Mac", "iOS", "Android"].map((platform) => (
                      <li
                        key={platform}
                        onClick={() => handleScroll(platform.toLowerCase())}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {platform}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              All essential features to get you started.
            </p>

            <ul role="list" className="mt-6 sm:mt-8 space-y-3 text-sm">
              {[
                "Access to free models",
                "Unlimited real-time meeting notetaking",
                "Custom system prompt",
                "Ask AI about all your past meetings",
                "Community support only",
              ].map((item, idx) => (
                <li key={idx} className="flex space-x-3">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                  <span className="text-gray-700 flex items-center">
                    {item} {item.includes("models") && <Info size={14} className="ml-2 text-gray-400" />}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="rounded-2xl p-6 sm:p-8 flex flex-col bg-gray-50/90 border border-gray-200 shadow-lg backdrop-blur-sm relative order-first md:order-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(255,255,255,0.9), transparent)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Pro</h3>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$20</span>
              <span className="ml-1 text-lg sm:text-xl font-semibold">/ month</span>
            </div>

            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="cursor-pointer mt-6 w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </motion.button>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              Unlimited access to all of Cluely for individuals.
            </p>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            className="rounded-2xl p-6 sm:p-8 flex flex-col bg-gray-50/90 border border-gray-200 shadow-lg backdrop-blur-sm relative"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(255,255,255,0.9), transparent)",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
            <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Custom
            </p>

            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="cursor-pointer mt-6 w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              Talk to sales
            </motion.button>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              Call superpowers and custom knowledge for teams.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
