import { motion } from "framer-motion";

export default function EnterpriseSection() {
  return (
    <>
      <div
        id="enterprice"
        className="w-full bg-[#E1E4EF] pt-0 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              
              {/* Text content */}
              <motion.div
                className="lg:w-2/3 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Enterprise
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  Imagine everyone knew as much about your company as you.
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  Put all your company's knowledge at every rep's fingertips with
                  AI-powered answers and objection handling in any conversation.
                </p>
              </motion.div>

              {/* Button */}
              <motion.div
                className="flex-shrink-0 mt-6 lg:mt-0 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/40 hover:opacity-90 transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Talk to sales
                </motion.button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 w-full"></div>
    </>
  );
}
