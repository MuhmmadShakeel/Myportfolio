import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {

  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  return (

    <footer className="w-full bg-[#06080f] text-white pt-16 pb-8 px-6 font-[Orbitron] border-t border-[#009689]/30">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}

          <div>

            <h2 className="text-2xl font-bold text-[#009689] mb-4">
              SHAKI DEV
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate full stack developer building modern web
              applications with scalable backend systems and
              interactive frontend experiences.
            </p>

          </div>



          {/* NAVIGATION */}

          <div>

            <h3 className="text-lg text-[#009689] font-semibold mb-5">
              Navigation
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-gray-400 text-sm">

              {links.map((link, index) => (

                <li key={index}>

                  <a
                    href={link.path}
                    className="hover:text-[#009689] transition duration-300"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>



          {/* SOCIAL LINKS */}

          <div>

            <h3 className="text-lg text-[#009689] font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-xl">

              <a
                href="#"
                className="p-3 bg-[#0a0d16] rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="p-3 bg-[#0a0d16] rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="p-3 bg-[#0a0d16] rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="p-3 bg-[#0a0d16] rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] transition duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>



        {/* DIVIDER */}

        <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#009689] to-transparent"></div>



        {/* BOTTOM */}

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Shaki Dev. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;