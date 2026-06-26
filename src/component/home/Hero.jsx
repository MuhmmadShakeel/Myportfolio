import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
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
    <section className="relative min-h-[95vh] flex items-center bg-[#05070d] text-white overflow-hidden px-5 sm:px-6 md:px-12 lg:px-20 py-12 md:py-0">

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

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-up"
            className="pr-0 md:pr-12 text-center md:text-left order-2 md:order-1"
          >

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#009689] to-[#00c4b4] mb-6">
              MERN Stack Developer
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
              I craft scalable, high-performance web applications using modern
              technologies. My expertise lies in building clean architectures,
              secure backend systems, and responsive user interfaces that deliver
              exceptional digital experiences.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-[#00c4b4] min-h-[60px]">
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

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-7 py-3 rounded-md bg-gradient-to-r from-[#009689] to-[#00c4b4] text-white font-medium hover:scale-105 transition shadow-lg shadow-[#009689]/30 flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4m10 8H5m14 0l-4 4m4-4l-4-4" />
                </svg>
                View Projects
              </Link>

              <a
                href="https://github.com/MuhmmadShakeel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-md border border-[#009689] text-[#009689] hover:bg-[#009689] hover:text-black transition flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.797 1.237 1.797 1.237.98 1.797 2.588 1.266 3.199.956.092-.746.377-.261.729-.578v-3.197c-1.281-.603-2.588-1.266-2.588-1.266-.98-1.797-2.588-1.266-3.199-.956-.092.746-.377.261-.729-.956v3.197c0 1.797-1.237 2.588-1.237 2.588.98 1.797 2.588 1.266 3.199.956.092-.746.377-.261.729-.578v-3.197c-1.281-.603-2.588-1.266-2.588-1.266z" />
                </svg>
                GitHub Profile
              </a>

              <Link
                to="/contact"
                className="px-7 py-3 rounded-md border border-[#009689] text-[#009689] hover:bg-[#009689] hover:text-black transition flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative flex items-center justify-center">

              {/* SIDE MOVING LINE */}
              <div className="absolute w-[280px] sm:w-[380px] md:w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#00c4b4] to-transparent animate-line"></div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 w-[180px] sm:w-[250px] md:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#009689] to-transparent animate-line-reverse"></div>

              {/* ROTATING CIRCLES */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] border border-[#00c4b4]/20 rounded-full animate-spin-slow"></div>

              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] border border-[#009689]/20 rounded-full animate-spin-reverse"></div>

              {/* IMAGE CONTAINER */}
              <div className="relative">

                {/* INNER LINES */}
                <div className="absolute inset-0 rounded-full border border-[#00c4b4]/10"></div>
                <div className="absolute inset-4 rounded-full border border-[#009689]/10"></div>

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#00c4b4] blur-3xl opacity-20 rounded-full"></div>

                {/* IMAGE */}
                <img
                  src={folioimagemen}
                  alt="profile"
                  className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] object-cover rounded-full border border-gray-700 shadow-2xl"
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
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes moveLine {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100px);
              opacity: 0;
            }
          }

          @keyframes moveLineReverse {
            0% {
              transform: translateX(100px);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(-100px);
              opacity: 0;
            }
          }
        `}
      </style>

    </section>
  );
}

export default Hero;