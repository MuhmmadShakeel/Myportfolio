import { useTranslation } from "react-i18next"
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import projectsHero from "../../assets/images/projects-hero.webp";

function ProjectHero() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#05070d] light:bg-[#f2f7f4] text-white light:text-slate-950 px-6 overflow-hidden">
      <img
        src={projectsHero}
        alt=""
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#05070d]/65 light:bg-[#eff9f2]/85" />

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
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009689] light:from-teal-800 to-[#00c4b4] light:to-emerald-700 mb-6"
        >
          {t("My Projects")}
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-300 light:text-slate-800 text-lg max-w-2xl mx-auto mb-8"
        >
          {t("A collection of real-world applications built using modern technologies, focusing on performance, scalability and professional UI/UX design.")}
        </p>

        {/* Typing Animation */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl md:text-2xl text-[#00c4b4] light:text-teal-800 mb-10"
        >
          <TypeAnimation key={i18n.resolvedLanguage}
            sequence={[
              t("Full Stack Applications"),
              1500,
              t("React Frontend Projects"),
              1500,
              t("Node.js Backend Systems"),
              1500,
              t("MongoDB Databases"),
              1500,
              t("REST API Development"),
              1500,
              t("Production Ready Code"),
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

          <button className="px-8 py-3 rounded-md bg-gradient-to-r from-[#009689] light:from-teal-800 to-[#00c4b4] light:to-emerald-700 text-white light:text-slate-950 font-medium hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#009689]/30">
            {t("View Projects")}
          </button>

          <button className="px-8 py-3 rounded-md border border-[#00c4b4] text-[#00c4b4] light:text-teal-800 hover:bg-[#00c4b4] hover:text-black transition duration-300">
            {t("GitHub Profile")}
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProjectHero;
