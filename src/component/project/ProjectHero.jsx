import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectHero() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#05070d] text-white font-[Orbitron] px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#009689] opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#00c4b4] opacity-10 blur-[150px] rounded-full"></div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009689] to-[#00c4b4] mb-6"
        >
          My Projects
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-8"
        >
          A collection of real-world applications built using modern technologies,
          focusing on performance, scalability and professional UI/UX design.
        </p>

        {/* Typing Animation */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl text-[#00c4b4] mb-10"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Applications",
              1500,
              "React Frontend Projects",
              1500,
              "Node.js Backend Systems",
              1500,
              "MongoDB Databases",
              1500,
              "REST API Development",
              1500,
              "Production Ready Code",
              1500,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </h2>

        {/* Buttons */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-6"
        >

          <button className="px-8 py-3 rounded-md bg-gradient-to-r from-[#009689] to-[#00c4b4] text-white font-medium hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#009689]/30">
            View Projects
          </button>

          <button className="px-8 py-3 rounded-md border border-[#00c4b4] text-[#00c4b4] hover:bg-[#00c4b4] hover:text-black transition duration-300">
            GitHub Profile
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProjectHero;