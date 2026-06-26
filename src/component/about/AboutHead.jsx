import React from "react";
import { Link } from "react-router-dom";
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

          <div className="flex gap-6 flex-wrap">

            <Link
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-[#009689] to-[#00c4b4] rounded-lg text-black font-semibold hover:scale-105 transition shadow-lg shadow-[#009689]/30 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4m10 8H5m14 0l-4 4m4-4l-4-4" />
              </svg>
              View Projects
            </Link>

            <a
              href="https://github.com/MuhmmadShakeel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#009689] rounded-lg text-[#009689] hover:bg-[#009689] hover:text-black transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.797 1.237 1.797 1.237.98 1.797 2.588 1.266 3.199.956.092-.746.377-.261.729-.578v-3.197c-1.281-.603-2.588-1.266-2.588-1.266.98-1.797 2.588-1.266 3.199-.956.092.746.377-.261.729-.578v3.197c0 1.797-1.237 2.588-1.237 2.588.98 1.797 2.588 1.266 3.199.956.092-.746.377-.261.729-.578v-3.197c-1.281.603-2.588 1.266-2.588 1.266z" />
              </svg>
              GitHub Profile
            </a>

            <Link
              to="/contact"
              className="px-6 py-3 border border-[#009689] rounded-lg text-[#009689] hover:bg-[#009689] hover:text-black transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </Link>

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