import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#05070d] text-white overflow-hidden">

      {/* TEAL GLOW EFFECTS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#009689] opacity-20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#00c4b4] opacity-20 blur-[180px] rounded-full"></div>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        {/* HERO CONTENT */}
        <div data-aos="fade-up" className="max-w-3xl">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009689] to-[#00c4b4] mb-8">
            MERN Stack Developer
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I design and develop high-performance, scalable web applications
            using the MERN stack, combining clean architecture, secure backend
            systems and responsive user interfaces to deliver modern,
            reliable and professional digital experiences.
          </p>

          {/* TYPING ROLE */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#00c4b4]">

            <TypeAnimation
              sequence={[
                "React Developer",
                1500,
                "HTML Expert",
                1500,
                "CSS Specialist",
                1500,
                "MongoDB Database",
                1500,
                "Express Backend",
                1500,
                "Next.js Framework",
                1500,
                "Node.js Runtime",
                1500,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />

          </h2>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6">

            <button className="px-7 py-3 rounded-md bg-gradient-to-r from-[#009689] to-[#00c4b4] text-white font-medium hover:scale-105 transition duration-300 shadow-lg shadow-[#009689]/30">
              View Projects
            </button>

            <button className="px-7 py-3 rounded-md border border-[#009689] text-[#009689] hover:bg-[#009689] hover:text-black transition duration-300">
              Contact Me
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;