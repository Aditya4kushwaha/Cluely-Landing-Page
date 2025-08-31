import { Twitter, Github, Instagram, LinkedinIcon } from "lucide-react";
import cluelyLogo from "../assets/cluelyLogo.svg";
const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-800 transition-colors"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#E1E4EF] pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 mb-6 sm:mb-8 md:mb-0">
            <img src={cluelyLogo} alt="Cluely Logo" className="h-7" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
              Use Cases
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <FooterLink>Sales</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>Consulting</FooterLink>
              <FooterLink>Recruiting</FooterLink>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
              Enterprise
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <FooterLink>Cluely for Enterprise</FooterLink>
              <FooterLink>Enterprise Security</FooterLink>
              <FooterLink>Vendor Profile</FooterLink>
              <FooterLink>ROI Calculator</FooterLink>
              <FooterLink>Book A Demo</FooterLink>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
              Resources
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Manifesto</FooterLink>
              <FooterLink>Press</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Bug Bounty</FooterLink>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
              Support
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <FooterLink>Help Center</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h3 className="cursor-pointer font-semibold text-gray-900 text-sm sm:text-base">
              Legal
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Data Processing Agreement</FooterLink>
              <FooterLink>Subprocessors</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 border-t border-gray-300 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
          <p className="text-gray-500 order-2 sm:order-1">
            © 2025 Cluely. All rights reserved.
          </p>

          <p className="text-gray-500 order-1 sm:order-2">
            Made with <span className="text-red-500">❤️</span> by AdityaXdev
          </p>

          <div className="flex space-x-4 text-gray-500 order-3">
            <FooterLink
              href="https://x.com/adityakush_04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} />
            </FooterLink>
            <FooterLink
              href="https://github.com/Aditya4kushwaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/aditya-kushwaha-3a9936285/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={18} />
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
