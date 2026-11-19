import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import { Box, Braces, Database, LayoutTemplate, Server, Workflow } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

const skills = [
  { name: "JavaScript", about: "Building interactive web experiences with modern ES6+ features and reusable application logic.", icon: Braces },
  { name: "Express.js", about: "Creating secure APIs with clear routing, request validation, and reliable error handling.", icon: Workflow },
  { name: "MongoDB", about: "Designing flexible data models and efficient queries for modern web applications.", icon: Database },
  { name: "Node.js", about: "Developing scalable backend services with asynchronous workflows and dependable integrations.", icon: Server },
  { name: "React.js", about: "Creating responsive interfaces with reusable components and intuitive user interactions.", icon: LayoutTemplate },
  { name: "NestJS", about: "Building modular backend applications with structured services and maintainable architecture.", icon: Box },
]

const globeDots = Array.from({ length: 48 }, (_, index) => {
  const latitude = Math.asin(1 - 2 * (index + 0.5) / 48)
  const longitude = index * 137.508 * Math.PI / 180
  const radius = Math.cos(latitude) * 46.5
  return {
    transform: 'translate3d(' + (Math.cos(longitude) * radius).toFixed(1) + 'cqw,' +
      (Math.sin(latitude) * 46.5).toFixed(1) + 'cqw,' +
      (Math.sin(longitude) * radius).toFixed(1) + 'cqw)',
  }
})

function AboutMe() {
  const { t, i18n } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const observer = new IntersectionObserver(([entry]) => {
      const active = entry.isIntersecting && !document.hidden
      section.dataset.active = String(active)
    }, { threshold: 0.15 })
    const updateVisibility = () => {
      const bounds = section.getBoundingClientRect()
      const active = !document.hidden && bounds.bottom > 0 && bounds.top < window.innerHeight
      section.dataset.active = String(active)
    }

    observer.observe(section)
    document.addEventListener("visibilitychange", updateVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", updateVisibility)
    }
  }, [])

  return (
    <section ref={sectionRef} aria-labelledby="about-me-title" className="portfolio-about bg-[#05070d] light:bg-[#f2f7f4] px-5 py-16 text-white light:text-slate-950 sm:px-10 lg:py-24" data-active="false">
      <header className="mx-auto mb-6 max-w-6xl text-center">
        <h2 id="about-me-title" className="text-3xl font-extrabold tracking-tight text-[#00c4b4] light:text-teal-800 sm:text-4xl">
          {t("About Me")}
        </h2>
      </header>
      <div className="portfolio-about-layout mx-auto grid w-full max-w-6xl items-center gap-6">
        <div className="portfolio-about-center flex min-w-0 flex-col items-center">
          <div className="portfolio-about-role flex min-h-20 w-full max-w-[370px] items-center justify-center px-1 text-center text-xl font-semibold leading-relaxed text-[#00c4b4] light:text-teal-800 sm:text-2xl lg:text-lg xl:text-xl">
            <TypeAnimation key={i18n.resolvedLanguage}
              sequence={[
                t("React Developer"), 1500,
                t("HTML Expert"), 1500,
                t("CSS Specialist"), 1500,
                t("MongoDB Database"), 1500,
                t("Express Backend"), 1500,
                t("Next.js Framework"), 1500,
                t("NestJS Developer"), 1500,
                t("Node.js Runtime"), 1500,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </div>
          <div className="portfolio-about-globe" role="img" aria-label={t("Rotating globe of connected dots")}>
            <div className="portfolio-about-sphere" aria-hidden="true">
              <div className="portfolio-about-meridians">
                {[0, 30, 60, 90, 120, 150].map((angle) => (
                  <span key={angle} className="portfolio-about-meridian" style={{ transform: 'rotateY(' + angle + 'deg)' }} />
                ))}
                {globeDots.map((style, index) => (
                  <span key={index} className="portfolio-about-dot" style={style} />
                ))}
              </div>
              {[-60, -30, 0, 30, 60].map((latitude) => (
                <span key={latitude} className="portfolio-about-latitude" style={{
                  width: Math.cos(latitude * Math.PI / 180) * 100 + '%',
                  top: 50 + Math.sin(latitude * Math.PI / 180) * 46 + '%',
                }} />
              ))}
            </div>
            <span className="portfolio-about-orbit" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-[370px] text-center text-base leading-relaxed text-slate-300 light:text-slate-700 sm:text-lg">
            {t("Passionate MERN stack developer focused on building scalable, secure and high-performance web applications using modern JavaScript technologies and clean architecture.")}
          </p>
        </div>

        {[skills.slice(0, 3), skills.slice(3)].map((group, side) => (
          <ul key={side} className="portfolio-about-side" data-side={side === 0 ? "left" : "right"} aria-label={side === 0 ? t("Core development technologies") : t("Application development technologies")}>
            {group.map((skill, index) => (
              <li key={skill.name} className="portfolio-about-card" style={{ '--step-delay': (index * 0.12) + 's' }}>
                <skill.icon size={20} className="mt-1 shrink-0 text-[#00c4b4] light:text-teal-800" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-emerald-200 light:text-emerald-800">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300 light:text-slate-700">{t(skill.about)}</p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default AboutMe
