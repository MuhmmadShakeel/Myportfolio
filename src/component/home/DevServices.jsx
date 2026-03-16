import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaServer, FaCode, FaDatabase, FaCloud, FaLaptopCode } from "react-icons/fa";

function DevServices() {

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Building scalable MERN applications with secure backend systems and responsive frontend architecture.",
      code: "Cloud Code"
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Creating fast, responsive and interactive user interfaces using modern JavaScript and React.",
      code: "UI Code"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Designing secure APIs and backend logic using Node.js and Express with scalable server architecture.",
      code: "Server Code"
    },
    {
      icon: <FaDatabase />,
      title: "Database Architecture",
      desc: "Structuring efficient MongoDB databases for scalable, high performance applications.",
      code: "Database Code"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Deploying applications with optimized cloud infrastructure and modern DevOps practices.",
      code: "Cloud Code"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-[#06080f] text-white py-24 px-6 font-[Orbitron]">

      {/* Animation Styles */}
      <style>{`

        .serviceCard{
          position:relative;
          overflow:hidden;
          transition:transform 0.35s ease;
        }

        .serviceCard:hover{
          transform:translateY(-6px);
        }

        .serviceCard::before{
          content:"";
          position:absolute;
          inset:-2px;
          border-radius:12px;
          padding:2px;
          background:linear-gradient(
            90deg,
            transparent 0%,
            transparent 25%,
            #009689 40%,
            #00c4b4 60%,
            transparent 75%,
            transparent 100%
          );
          animation:borderRun 4s linear infinite;
        }

        .serviceCardInner{
          position:relative;
          background:#0a0d16;
          border-radius:12px;
          padding:32px;
          height:100%;
        }

        @keyframes borderRun{
          0%{
            transform:translateX(-100%);
          }
          100%{
            transform:translateX(100%);
          }
        }

      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-[#009689]">
            Development Services
          </h2>

          <p className="text-white mt-5 max-w-2xl mx-auto">
            Professional development solutions combining modern frontend
            interfaces with powerful backend architectures and scalable
            infrastructure.
          </p>

        </div>


        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <div key={index} className="serviceCard">

              <div className="serviceCardInner flex flex-col items-center text-center">

                {/* Icon */}
                <div className="text-[#009689] text-4xl mb-4 transition duration-300 hover:text-[#00c4b4]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#009689] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Animated Tech Text */}
                <div className="text-sm text-[#009689] bg-[#05070d] px-4 py-2 rounded-md border border-[#009689]/40">

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
                      service.code,
                      1500
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DevServices;