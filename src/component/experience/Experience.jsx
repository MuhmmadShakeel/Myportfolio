import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Freelance / Personal Projects",
      date: "2024 - Present",
      desc: "Developed full stack web applications using MongoDB, Express, React and Node.js with secure authentication and scalable backend architecture."
    },
    {
      title: "Frontend Developer",
      company: "Self Projects",
      date: "2023 - 2024",
      desc: "Built responsive and modern UI using React, Tailwind CSS and JavaScript with focus on performance and user experience."
    },
    {
      title: "Backend Developer",
      company: "Learning Phase",
      date: "2023",
      desc: "Created REST APIs using Node.js and Express, handled database operations with MongoDB and implemented authentication systems."
    },
    {
      title: "Programming Foundations",
      company: "CS Student",
      date: "2022 - 2023",
      desc: "Learned core programming concepts including JavaScript, problem solving, data structures and web fundamentals."
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#05070d] text-white py-20 px-6 font-[Orbitron]">

      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#009689] opacity-10 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#009689]">
            Experience
          </h2>
          <p className="text-gray-400 mt-4">
            My development journey and professional growth over time.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[#009689]/30 transform -translate-x-1/2 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-16">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#009689] rounded-full shadow-[0_0_15px_#009689] hidden md:block"></div>

              {/* Card */}
              <div className="w-full md:w-[45%] bg-[#0a0d16] p-6 rounded-xl border border-[#009689]/30 hover:border-[#00c4b4] transition duration-300 shadow-lg hover:shadow-[#009689]/20">

                <h3 className="text-xl font-semibold text-[#00c4b4] mb-1">
                  {exp.title}
                </h3>

                <p className="text-sm text-gray-400 mb-2">
                  {exp.company} • {exp.date}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}
export default Experience;