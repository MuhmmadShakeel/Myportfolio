import { useTranslation } from "react-i18next"
import React, { useState } from "react";
import { Menu, X, Sun, Moon, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { applyTheme, getTheme } from "../../theme";

function Navbar() {
  const { t, i18n } = useTranslation()

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getTheme);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (

    <nav className="w-full bg-[#05070d] light:bg-[#f2f7f4] border-b border-[#009689]/30 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-3 py-4 sm:px-6">

        <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold tracking-tight text-white light:text-slate-950 transition-colors hover:text-emerald-300 light:hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700 sm:text-xl">
          {t("Muhammad Shakeel")}
        </Link>


        {/* DESKTOP MENU */}

        <ul className="hidden xl:flex gap-6 text-gray-300 light:text-slate-800 font-medium">

          {navLinks.map((link, index) => (

            <li
              key={index}
              className="relative cursor-pointer group transition duration-300"
            >

              <Link
                to={link.path}
                className="group-hover:text-[#009689] light:group-hover:text-teal-700 transition duration-300"
              >
                {t(link.name)}
              </Link>

              {/* Hover underline */}

              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[#009689] light:from-teal-800 to-[#00c4b4] light:to-emerald-700 group-hover:w-full transition-all duration-300"></span>

            </li>

          ))}

        </ul>


        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div role="group" aria-label={t("Language")} className="hidden sm:flex items-center rounded-lg border border-emerald-200/20 light:border-emerald-900/20 p-1">
            {[["en", "EN"], ["ar", "AR"], ["ur", "UR"]].map(([code, label]) => (
              <button key={code} type="button" lang={code} aria-pressed={i18n.resolvedLanguage === code} onClick={() => i18n.changeLanguage(code)} className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${i18n.resolvedLanguage === code ? "bg-emerald-300 text-slate-950" : "text-slate-300 hover:text-white light:text-slate-700 light:hover:text-emerald-800"}`}>{label}</button>
            ))}
          </div>
          <button type="button" aria-label={t(theme === "dark" ? "Switch to light mode" : "Switch to dark mode")} onClick={() => { const nextTheme = theme === "dark" ? "light" : "dark"; setTheme(nextTheme); applyTheme(nextTheme); }} className="rounded-lg border border-emerald-200/20 light:border-emerald-900/20 p-2.5 text-emerald-200 light:text-emerald-800 hover:bg-white/10 light:hover:bg-emerald-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a href="https://cal.com/muhammad-shakeel-ml8989/30min" target="_blank" rel="noopener noreferrer" className="hidden xl:inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"><CalendarDays size={16} aria-hidden="true" />{t("Book a call")}</a>

          <button
            type="button"
            className="xl:hidden rounded text-emerald-300 light:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t("Close menu") : t("Open menu")}
            aria-controls="portfolio-mobile-nav"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>


      {/* MOBILE MENU */}

      {open && (

        <div id="portfolio-mobile-nav" className="xl:hidden bg-[#05070d] light:bg-[#f2f7f4] border-t border-[#009689]/30 px-6 py-6">

          <ul className="flex flex-col gap-6 text-gray-300 light:text-slate-800 text-lg">

            {navLinks.map((link, index) => (

              <li key={index}>

                <Link
                  to={link.path}
                  className="hover:text-[#009689] light:hover:text-teal-700 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {t(link.name)}
                </Link>

              </li>

            ))}

          </ul>
          <div role="group" aria-label={t("Language")} className="mt-6 flex flex-wrap gap-2 sm:hidden">
            {[["en", "EN"], ["ar", "AR"], ["ur", "UR"]].map(([code, label]) => <button key={code} type="button" lang={code} aria-pressed={i18n.resolvedLanguage === code} onClick={() => i18n.changeLanguage(code)} className={`rounded-lg border border-emerald-200/20 px-3 py-2 text-sm ${i18n.resolvedLanguage === code ? "bg-emerald-300 text-slate-950" : "text-slate-300 light:text-slate-700"}`}>{label}</button>)}
          </div>
          <a href="https://cal.com/muhammad-shakeel-ml8989/30min" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-200"><CalendarDays size={16} aria-hidden="true" />{t("Book a call")}</a>
        </div>

      )}

    </nav>
  );
}

export default Navbar;
