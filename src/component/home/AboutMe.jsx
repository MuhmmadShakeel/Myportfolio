import React from "react";
import { TypeAnimation } from "react-type-animation";

function AboutMe() {

  const skills = [
    {
      name: "React.js",
      about: "Building dynamic and responsive user interfaces with reusable components."
    },
    {
      name: "Node.js",
      about: "Developing fast and scalable backend services using JavaScript."
    },
    {
      name: "MongoDB",
      about: "Managing flexible NoSQL databases for modern web applications."
    },
    {
      name: "Express.js",
      about: "Creating secure APIs and backend routing for web apps."
    },
    {
      name: "JavaScript",
      about: "Powering interactive web experiences with modern ES6+ features."
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#05070d] text-white flex items-center justify-center font-[Orbitron] px-6 md:px-10">

      <style>{`

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit{
          position:absolute;
          border-radius:50%;
          animation: rotateOrbit linear infinite;
          opacity:0.9;
        }

      `}</style>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-center justify-center">

          {/* ORBIT SYSTEM */}
          <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] flex items-center justify-center">

            {/* OUTER ORBIT */}
            <div
              className="orbit w-full h-full border-t-[6px] border-[#009689]"
              style={{ animationDuration: "24s" }}
            ></div>

            {/* MID ORBIT */}
            <div
              className="orbit w-[280px] h-[280px] md:w-[320px] md:h-[320px] border-r-[6px] border-[#00c4b4]"
              style={{ animationDuration: "18s" }}
            ></div>

            {/* INNER ORBIT */}
            <div
              className="orbit w-[240px] h-[240px] md:w-[280px] md:h-[280px] border-b-[6px] border-[#009689]"
              style={{ animationDuration: "14s" }}
            ></div>

            {/* CENTER CIRCLE */}
            <div className="absolute w-[200px] h-[200px] md:w-[220px] md:h-[220px] bg-gradient-to-br from-[#009689] to-[#00c4b4] rounded-full flex items-center justify-center text-center px-6 shadow-lg shadow-[#009689]/30">

              <div className="text-xl md:text-2xl font-bold text-white leading-relaxed">

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

              </div>

            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-sm text-center mt-6 max-w-sm leading-relaxed">
            Passionate MERN stack developer focused on building scalable,
            secure and high-performance web applications using modern
            JavaScript technologies and clean architecture.
          </p>

        </div>


        {/* RIGHT SECTION */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#009689] mb-8">
            About Me
          </h2>

          <div className="space-y-4">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-full min-h-[70px] flex flex-col justify-center px-6 py-3 bg-black/40 border border-[#009689]/40 rounded-md hover:border-[#009689] hover:shadow-md hover:shadow-[#009689]/20 transition duration-300"
              >

                <h3 className="text-[#00c4b4] font-semibold">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-300">
                  {skill.about}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMe;