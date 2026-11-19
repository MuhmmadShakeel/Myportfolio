import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { CalendarDays } from "lucide-react";
import { contactEmail } from "../../contactDetails";

function Footer() {
  const { t } = useTranslation()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <footer className="w-full bg-[#06080f] light:bg-[#f7faf8] text-white light:text-slate-950 pt-16 pb-8 px-6 border-t border-[#009689]/30">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}

          <div>

            <h2 className="text-2xl font-bold text-[#009689] light:text-teal-800 mb-4">
              {t("Shakeel Developer")}
            </h2>

            <p className="text-gray-400 light:text-slate-600 text-sm leading-relaxed">
              {t("Passionate full stack developer building modern web applications with scalable backend systems and interactive frontend experiences.")}
            </p>

          </div>



          {/* NAVIGATION */}

          <div>

            <h3 className="text-lg text-[#009689] light:text-teal-800 font-semibold mb-5">
              {t("Navigation")}
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-gray-400 light:text-slate-600 text-sm">

              {links.map((link, index) => (

                <li key={index}>

                  <Link
                    to={link.path}
                    className="hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
                  >
                    {t(link.name)}
                  </Link>

                </li>

              ))}

            </ul>

          </div>



          {/* SOCIAL LINKS */}

          <div>

            <h3 className="text-lg text-[#009689] light:text-teal-800 font-semibold mb-5">
              {t("Connect With Me")}
            </h3>

            <div className="flex gap-5 text-xl">

              <a
                href="https://github.com/MuhmmadShakeel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-[#0a0d16] light:bg-white rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-shakeel-530b78382/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-[#0a0d16] light:bg-white rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/DevShaki41924"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-3 bg-[#0a0d16] light:bg-white rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                aria-label={t("Email")}
                className="p-3 bg-[#0a0d16] light:bg-white rounded-lg border border-[#009689]/30 hover:border-[#009689] hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
              >
                <FaEnvelope />
              </a>

            </div>
            <a href="https://cal.com/muhammad-shakeel-ml8989/30min" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"><CalendarDays size={17} aria-hidden="true" />{t("Book a call")}</a>
          </div>

        </div>



        {/* DIVIDER */}

        <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#009689] to-transparent"></div>



        {/* BOTTOM */}

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 light:text-slate-600 text-sm">

          <p>
            © {new Date().getFullYear()} {t("Shakeel Developer. All rights reserved.")}
          </p>

          <p className="mt-3 md:mt-0">
            {t("Built with React & Tailwind CSS")}
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
