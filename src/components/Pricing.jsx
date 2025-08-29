import { Check, Info, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [platformOpen, setPlatformOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setPlatformOpen(false);
    }
  };

  return (
    <div
      id="pricing"
      className="w-full bg-[#E1E4EF] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl p-8 flex flex-col bg-gray-50/80 border border-gray-200 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
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

              {platformOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  {["Mac", "iOS", "Android"].map((platform) => (
                    <li
                      key={platform}
                      onClick={() => handleScroll(platform.toLowerCase())}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {platform}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              All essential features to get you started.
            </p>

            <ul role="list" className="mt-8 space-y-3 text-sm">
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700 flex items-center">
                  Access to free models{" "}
                  <Info size={14} className="ml-2 text-gray-400" />
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Unlimited real-time meeting notetaking
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">Custom system prompt</span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Ask AI about all your past meetings
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">Community support only</span>
              </li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-8 flex flex-col bg-gray-50/90 border border-gray-200 shadow-lg backdrop-blur-sm relative"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(255,255,255,0.9), transparent)",
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800">Pro</h3>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-extrabold tracking-tight">
                $20
              </span>
              <span className="ml-1 text-xl font-semibold">/ month</span>
            </div>

            <button className="cursor-pointer mt-6 w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Subscribe
            </button>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              Unlimited access to all of Cluely for individuals.
            </p>
            <p className="mt-8 font-semibold text-gray-800 text-sm">
              Everything in Starter, plus...
            </p>

            <ul role="list" className="mt-4 space-y-3 text-sm">
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">Unlimited pro responses</span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700 flex items-center">
                  Unlimited access to latest models{" "}
                  <Info size={14} className="ml-2 text-gray-400" />
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Full conversations dashboard access
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">Priority support</span>
              </li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-8 flex flex-col bg-gray-50/90 border border-gray-200 shadow-lg backdrop-blur-sm relative"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 100% 80% at 50% -20%, rgba(255,255,255,0.9), transparent)",
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
              Custom
            </p>

            <button className="cursor-pointer mt-6 w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
              Talk to sales
            </button>

            <p className="mt-6 text-sm text-gray-600 min-h-[40px]">
              Call superpowers and custom knowledge for teams.
            </p>
            <p className="mt-8 font-semibold text-gray-800 text-sm">
              Everything in Pro, plus...
            </p>

            <ul role="list" className="mt-4 space-y-3 text-sm">
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Sales and Post-Call Coaching
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">RAG Knowledge Base</span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">CRM Integrations</span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  User provisioning & role-based access
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Advanced Post-call Analytics
                </span>
              </li>
              <li className="flex space-x-3">
                <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                <span className="text-gray-700">
                  Single Sign-on & IDP integration
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
