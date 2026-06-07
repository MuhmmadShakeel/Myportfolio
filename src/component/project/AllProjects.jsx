import React, { useState } from "react";
import zooImage from "../../assets/images/Zoo.png";
import ISMImage from "../../assets/images/ISM.png";
import quranImage from "../../assets/images/alquran.png";
import aldusariImage from "../../assets/images/aldusari.png";
import carImage from "../../assets/images/linkwayride.png";
import restaurantImage from "../../assets/images/az-services.png";
import gymnasticsImage from "../../assets/images/burlo-gym.png";
import school from "../../assets/images/online-school.png";
import shipmentImage from "../../assets/images/shipment-dashboard.png";
import akoya from '../../assets/images/akoya.png';
import coffee from '../../assets/images/coffee.png'
import lostfound from '../../assets/images/Lost-Found.png'
import refrigeratorrepair from '../../assets/images/refrigerator.png'
import codethinker from '../../assets/images/codethinker.png'
import yestime from '../../assets/images/yestime.png'
import visitingsystem from '../../assets/images/visiting-system.png'
const projects = [
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
    <div className="bg-[#05070D] text-white py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-[#00AC9E]">Projects</span>
      </h2>

      {/* Grid */}

      {/* Compact centered filter bar */}
      <div className="mb-10">
        <div className="max-w-md mx-auto flex items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 bg-[#0d1117] rounded-full p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition focus:outline-none ${
                  filter === f ? "bg-[#00AC9E] cursor-pointer text-black" : "text-gray-300 cursor-pointer"
                }`}
                aria-pressed={filter === f}
                aria-label={`Filter ${f}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0d1117] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00AC9E] transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {project.name}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#00AC9E]/20 text-[#00AC9E] px-2 py-3 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* FIXED BUTTON */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#00AC9E] text-black py-2 rounded-lg font-medium hover:bg-[#00c2b2] transition cursor-pointer"
              >
                View Demo →
              </a>
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