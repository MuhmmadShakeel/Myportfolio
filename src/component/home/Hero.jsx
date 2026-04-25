import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import folioimagemen from "../../assets/images/folioimagemen.png";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#05070d] text-white overflow-hidden px-8 md:px-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#009689] opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#00c4b4] opacity-20 blur-[140px] rounded-full"></div>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto w-full">

        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* LEFT CONTENT */}
          <div data-aos="fade-up" className="pr-6 md:pr-12">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#009689] to-[#00c4b4] mb-6">
              MERN Stack Developer
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I craft scalable, high-performance web applications using modern
              technologies. My expertise lies in building clean architectures,
              secure backend systems, and responsive user interfaces that deliver
              exceptional digital experiences.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-[#00c4b4]">
              <TypeAnimation
                sequence={[
                  "Full Stack Engineer", 1500,
                  "React & Next.js Developer", 1500,
                  "Node.js Backend Specialist", 1500,
                  "MongoDB Expert", 1500,
                ]}
                speed={60}
                repeat={Infinity}
              />
            </h2>

            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-3 rounded-md bg-gradient-to-r from-[#009689] to-[#00c4b4] text-white font-medium hover:scale-105 transition shadow-lg shadow-[#009689]/30">
                View Projects
              </button>

              <button className="px-7 py-3 rounded-md border border-[#009689] text-[#009689] hover:bg-[#009689] hover:text-black transition">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center md:justify-end mr-6 md:mr-12"
          >
            <div className="relative flex items-center justify-center">

              {/* SIDE MOVING LINE */}
              <div className="absolute w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#00c4b4] to-transparent animate-line"></div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#009689] to-transparent animate-line-reverse"></div>

              {/* ROTATING CIRCLES */}
              <div className="absolute w-[420px] h-[420px] border border-[#00c4b4]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[340px] h-[340px] border border-[#009689]/20 rounded-full animate-spin-reverse"></div>

              {/* IMAGE CONTAINER */}
              <div className="relative">

                {/* INNER LINES (inside image area) */}
                <div className="absolute inset-0 rounded-full border border-[#00c4b4]/10"></div>
                <div className="absolute inset-4 rounded-full border border-[#009689]/10"></div>

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#00c4b4] blur-3xl opacity-20 rounded-full"></div>

                {/* IMAGE */}
                <img
                  src={folioimagemen}
                  alt="profile"
                  className="relative w-[300px] md:w-[380px] h-[300px] md:h-[380px] object-cover rounded-full border border-gray-700 shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spinReverse 25s linear infinite;
          }
          .animate-line {
            animation: moveLine 6s linear infinite;
          }
          .animate-line-reverse {
            animation: moveLineReverse 8s linear infinite;
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          @keyframes moveLine {
            0% { transform: translateX(-100px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100px); opacity: 0; }
          }

          @keyframes moveLineReverse {
            0% { transform: translateX(100px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100px); opacity: 0; }
          }
        `}
      </style>

    </section>
  );
}

export default Hero;