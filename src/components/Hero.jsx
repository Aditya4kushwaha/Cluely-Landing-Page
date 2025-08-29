import cluelyLogo from "../assets/cluelyLogo.svg";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-[#E1E4EF] relative flex flex-col items-center justify-center text-center px-4"
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

      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10">
        <div className="flex items-center space-x-2">
          <img
            src={cluelyLogo}
            alt="Cluely Logo"
            className="cursor-pointer w-auto h-10"
          />
        </div>
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#pricing" className="hover:text-black">
            Pricing
          </a>
          <a href="#enterprice" className="hover:text-black">
            Enterprise
          </a>
          <a href="#footer" className="hover:text-black">
            Careers
          </a>
          <a href="#footer" className="hover:text-black">
            Connect
          </a>
        </nav>
        <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800">
          <a href="#pricing">Get Started for Free</a>
        </button>
      </header>

      <div className="flex flex-col items-center justify-center max-w-3xl mt-24 z-10">
        <h1 className="text-10xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Invisible AI That <br /> Thinks for You
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Cluely is an undetectable desktop app that gives you <br />
          the answers you didn’t study for in every meeting <br />
          and conversation.
        </p>
      </div>

      <div className="absolute bottom-10 right-10 z-10">
        <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center">
          <span className="text-2xl">↵</span>
        </div>
      </div>
    </div>
  );
}
