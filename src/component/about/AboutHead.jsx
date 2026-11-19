import { useTranslation } from "react-i18next"
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutpic from "../../assets/images/about-hero-new.webp";

function AboutHead() {
  const { t } = useTranslation()
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-[#0b171b] light:bg-[#e8f3ed] flex min-h-[calc(100svh-4.5rem)] items-center px-5 py-12 text-white light:text-slate-950 sm:px-6 sm:py-16"
    >
      <img
        src={aboutpic}
        alt=""
        width={1600}
        height={900}
        fetchPriority="high"
        className="absolute inset-x-0 top-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#071c20]/85 light:bg-[#e8f3ed]/90"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="about-title"
            className="text-balance text-[clamp(2rem,4.25vw,4.15rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-emerald-50 light:text-emerald-950"
          >
            {t("Full-Stack Web and Mobile App Developer")}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-200 light:text-slate-800 sm:text-lg">
            {t("I'm Muhammad Shakeel. I build responsive websites, custom web applications, and mobile apps for businesses and product teams.")}
          </p>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300 light:text-slate-700">
            {t("My work covers frontend development, backend APIs, database design, and cloud deployment. I can build a complete product or add features to an existing application, with attention to performance and accessibility.")}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700"
            >
              {t("View Projects")} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-white/20 light:border-emerald-900/25 px-5 py-3 font-semibold transition-colors hover:bg-white/10 light:hover:bg-emerald-900/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700"
            >
              {t("Contact Me")}
            </Link>
            <a
              href="https://github.com/MuhmmadShakeel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-3 text-sm font-medium text-emerald-200 light:text-emerald-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700"
            >
              {t("GitHub Profile")} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHead;
