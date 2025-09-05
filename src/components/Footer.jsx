import { Twitter, Github, LinkedinIcon } from "lucide-react";
import cluelyLogo from "../assets/cluelyLogo.svg";
import { motion } from "framer-motion";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-800 transition-colors"
  >
    {children}
  </a>
);

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Footer() {
  const columns = [
    { title: "Use Cases", links: ["Sales", "Support", "Consulting", "Recruiting"] },
    {
      title: "Enterprise",
      links: [
        "Cluely for Enterprise",
        "Enterprise Security",
        "Vendor Profile",
        "ROI Calculator",
        "Book A Demo",
      ],
    },
    { title: "Resources", links: ["Pricing", "Manifesto", "Press", "Careers", "Bug Bounty"] },
    { title: "Support", links: ["Help Center", "Contact Us"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Data Processing Agreement", "Subprocessors"] },
  ];

  return (
    <footer className="w-full bg-[#E1E4EF] pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Logo */}
          <motion.div
            className="col-span-1 sm:col-span-2 md:col-span-1 mb-6 sm:mb-8 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={cluelyLogo} alt="Cluely Logo" className="h-7" />
          </motion.div>

          {/* Footer columns */}
          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              className="space-y-3 sm:space-y-4"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={columnVariants}
            >
              <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
                {col.title}
              </h3>
              <div className="flex flex-col space-y-2 text-sm">
                {col.links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 sm:mt-16 border-t border-gray-300 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-center sm:text-left flex-1">
            © 2025 Cluely. All rights reserved.
          </p>

          <p className="text-gray-500 flex-1 text-center">
            Made with <span className="text-red-500">❤️</span> by AdityaXdev
          </p>

          <div className="flex space-x-4 flex-1 justify-center sm:justify-end text-gray-500">
            <motion.a
              href="https://x.com/adityakush_04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="https://github.com/Aditya4kushwaha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aditya-kushwaha-3a9936285/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <LinkedinIcon size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
