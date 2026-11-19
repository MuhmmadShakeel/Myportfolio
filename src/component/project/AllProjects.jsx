import { useTranslation } from "react-i18next"
import React, { useState } from "react";
import zooImage from "../../assets/images/Zoo.webp";
import ISMImage from "../../assets/images/ISM.webp";
import quranImage from "../../assets/images/alquran.webp";
import aldusariImage from "../../assets/images/aldusari.webp";
import carImage from "../../assets/images/linkwayride.webp";
import restaurantImage from "../../assets/images/az-services.webp";
import gymnasticsImage from "../../assets/images/burlo-gym.webp";
import school from "../../assets/images/online-school.webp";
import shipmentImage from "../../assets/images/shipment-dashboard.webp";
import akoya from '../../assets/images/akoya.webp';
import coffee from '../../assets/images/coffee.webp'
import lostfound from '../../assets/images/Lost-Found.webp'
import refrigeratorrepair from '../../assets/images/refrigerator.webp'
import codethinker from '../../assets/images/codethinker.webp'
import yestime from '../../assets/images/yestime.webp'
import visitingsystem from '../../assets/images/visiting-system.webp'
import leadGenerationImage from "../../assets/images/lead-generation-ai.webp";
const projects = [
  {
    name: "AI Lead Generation Scraper",
    description: "An AI-powered lead generation tool that gathers and organizes prospect data to support more focused outreach.",
    image: leadGenerationImage,
    tech: ["AI", "Lead Generation"],
    stack: "ai",
  },
  {
    name: "Zoo Events Platform",
    link: "https://zoo-drab.vercel.app/events",
    image: zooImage,
    tech: ["React", "UI/UX"],
    stack: "mern",
  },
  {
    name: "yes-time",
    link: "https://yes-time.vercel.app/",
    image: yestime,
    tech: ["React", "UI/UX"],
  },
  {
    name: "visiting system",
    link: "https://online-tour-system.vercel.app/about",
    image: visitingsystem,
    tech: ["React", "UI/UX"],
    stack: "mern",
  },
  {
    name: "Lost&Found System",
    link: "https://fyp-lost-found-system.vercel.app/",
    image: lostfound,
    tech: ["React", "UI/UX"],
    stack: "mern",
  },
  {
    name: "ISM Institute Website",
    link: "https://ism-institude.vercel.app/",
    image: ISMImage,
    tech: ["React", "Education"],
  },
  {
    name: "Online Quran App",
    link: "https://online-quran-rho.vercel.app/",
    image: quranImage,
    tech: ["React", "API"],
  },
  {
    name: "Al Dosari Reserve",
    link: "https://al-dosari-reserve.vercel.app/",
    image: aldusariImage,
    tech: ["Booking", "UI"],
  },
  {
    name: "Code-Thinker",
    link: "https://codesthinker-rouge.vercel.app/",
    image: codethinker,
    tech: ["Booking", "UI"],
  },
  {
    name: "Refrigerator-Repair Services",
    link: "https://refrigerator-repair.vercel.app/",
    image: refrigeratorrepair,
    tech: ["Booking", "UI"],
  },
  {
    name: "Car Rental System",
    link: "https://car-yellow-renal.vercel.app/",
    image: carImage,
    tech: ["React", "Dashboard"],
  },
  {
    name: "Restaurant Services",
    link: "https://az-restaurant-services.vercel.app/",
    image: restaurantImage,
    tech: ["Frontend", "UI"],
  },
  {
    name: "Gymnastics Website",
    link: "https://burlo-gymnastics.vercel.app/",
    image: gymnasticsImage,
    tech: ["Fitness", "React"],
  },
    {
    name: "Akoya Loundary",
    link: "https://project-gilt-rho.vercel.app/",
    image:akoya ,
    tech: ["Design", "Frontend"],
  },
  {
    name: "School Management System",
    link: "https://school-management-system-7k6c.vercel.app/",
    image: school,
    tech: ["Full Stack", "CRUD"],
  },
  {
    name: "Shipment Dashboard",
    link: "https://shipment-dashboard-4f3l.vercel.app/",
    image: shipmentImage,
    tech: ["Dashboard", "Analytics"],
  },
  {
    name: "SEO Portfolio",
    link: "https://seo-portfolio-u2lv.vercel.app/",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    tech: ["SEO", "Marketing"],
    stack: "frontend",
  },
  {
    name: "Coffee Shop Project",
    link: "https://coffee-rust-kappa.vercel.app/",
    image: coffee,
    tech: ["Design", "Frontend"],
    stack: "frontend",
  },
];

function AllProjects() {
  const { t, i18n } = useTranslation()
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Frontend", "Mern-STACK", "AI"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Frontend") return (p.stack ? p.stack.toLowerCase() === "frontend" : true);
    if (filter === "Mern-STACK") return p.stack && p.stack.toLowerCase() === "mern";
    if (filter === "AI") return (p.tech || []).some((t) => t.toLowerCase() === "ai" || (p.stack && p.stack.toLowerCase() === "ai"));
    return true;
  });

  return (
    <div className="bg-[#05070D] light:bg-[#f2f7f4] text-white light:text-slate-950 py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        {i18n.resolvedLanguage === "ar"
          ? <span className="text-[#00AC9E] light:text-teal-800">{t("My Projects")}</span>
          : <>{t("My")} <span className="text-[#00AC9E] light:text-teal-800">{t("Projects")}</span></>}
      </h2>

      {/* Grid */}

      {/* Compact centered filter bar */}
      <div className="mb-10">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-4 bg-[#0d1117] light:bg-white rounded-2xl sm:rounded-full p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1 font-medium transition focus:outline-none ${
                  filter === f ? "bg-[#00AC9E] cursor-pointer text-black" : "text-gray-300 light:text-slate-800 cursor-pointer"
                }`}
                aria-pressed={filter === f}
                aria-label={t("Filter {{category}}", { category: t(f) })}
              >
                {t(f)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0d1117] light:bg-white rounded-2xl overflow-hidden border border-gray-800 light:border-emerald-900/20 hover:border-[#00AC9E] transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                loading="lazy"
                decoding="async"
                alt={t(project.name)}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {t(project.name)}
              </h3>

              {project.description && <p className="mb-5 text-sm leading-relaxed text-slate-400 light:text-slate-600">{t(project.description)}</p>}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#00AC9E]/20 text-[#00AC9E] light:text-teal-800 px-2 py-3 rounded"
                  >
                    {t(tag)}
                  </span>
                ))}
              </div>

              {/* FIXED BUTTON */}
              {project.link && <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#00AC9E] text-black py-2 rounded-lg font-medium hover:bg-[#00c2b2] transition cursor-pointer"
              >
                {t("View Demo →")}
              </a>}
            </div>

            {/* FIX: Overlay not blocking clicks */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 bg-[#00AC9E] blur-xl transition"></div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AllProjects;
