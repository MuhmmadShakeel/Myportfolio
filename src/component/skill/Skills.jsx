import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5", level: 95 },
        { name: "CSS3 / Tailwind", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 83 },
        { name: "REST APIs", level: 87 },
        { name: "Authentication (JWT)", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 84 },
        { name: "Git & GitHub", level: 88 },
        { name: "Postman", level: 85 },
        { name: "Deployment", level: 75 }
      ]
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#05070d] text-white py-20 px-6 font-[Orbitron] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#009689] opacity-10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Animated Heading */}
        <div className="text-center mb-16" data-aos="fade-up">

          <h2 className="text-4xl md:text-5xl font-bold text-[#009689] mb-4">

            <TypeAnimation
              sequence={[
                "Technical Skills",
                2000,
                "My Expertise",
                2000,
                "Development Stack",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">

            <TypeAnimation
              sequence={[
                "Building modern, scalable and high-performance applications.",
                2000,
                "Combining frontend, backend and database technologies.",
                2000,
                "Creating secure, responsive and optimized systems.",
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />

          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#0a0d16] p-6 rounded-xl border border-[#009689]/30 hover:border-[#00c4b4] transition duration-300 shadow-lg hover:shadow-[#009689]/20"
            >

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-[#00c4b4] mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-5">

                {category.skills.map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#009689]">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-[#009689] to-[#00c4b4] transition-all duration-[1500ms]"
                        style={{ width: `${skill.level}%` }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;