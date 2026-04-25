import React from "react";
import aboutpic from "../../assets/images/aboutpic.png";
function AboutHead() {
  return (

    <section
      id="about"
      className="w-full min-h-screen bg-[#06080f] text-white py-24 px-6 font-[Orbitron]"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#009689] mb-6">
            About Me
          </h1>

          <p className="text-gray-400 leading-relaxed mb-8">
            I am a passionate <span className="text-[#009689]">Full Stack Developer</span>
            focused on building scalable web applications and modern user
            interfaces. My work combines clean frontend design with powerful
            backend architecture to create reliable digital solutions.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            I specialize in the <span className="text-[#009689]">MERN stack</span>
            and enjoy building projects that solve real-world problems while
            maintaining performance, security, and user experience.
          </p>

          {/* SKILL BADGES */}

          <div className="flex flex-wrap gap-4 mb-10">

            <span className="px-4 py-2 bg-[#0a0d16] border border-[#009689]/40 rounded-lg text-sm hover:border-[#009689] transition">
              React
            </span>

            <span className="px-4 py-2 bg-[#0a0d16] border border-[#009689]/40 rounded-lg text-sm hover:border-[#009689] transition">
              Node.js
            </span>

            <span className="px-4 py-2 bg-[#0a0d16] border border-[#009689]/40 rounded-lg text-sm hover:border-[#009689] transition">
              MongoDB
            </span>

            <span className="px-4 py-2 bg-[#0a0d16] border border-[#009689]/40 rounded-lg text-sm hover:border-[#009689] transition">
              Express
            </span>

            <span className="px-4 py-2 bg-[#0a0d16] border border-[#009689]/40 rounded-lg text-sm hover:border-[#009689] transition">
              Tailwind CSS
            </span>

          </div>


          {/* BUTTONS */}

          <div className="flex gap-6">

            <a
              href="#projects"
              className="px-6 py-3 bg-[#009689] rounded-lg text-black font-semibold hover:bg-[#00c4b4] transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#009689] rounded-lg text-[#009689] hover:bg-[#009689] hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Background */}

            <div className="absolute inset-0 blur-3xl bg-[#009689]/20 rounded-full"></div>

            <img
              src={aboutpic}
              alt="developer"
              className="relative w-[380px] md:w-[420px] rounded-2xl border border-[#009689]/40 shadow-xl"
            />

          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutHead;