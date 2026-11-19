import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation";
import { FaServer, FaCode, FaDatabase, FaCloud, FaLaptopCode } from "react-icons/fa";

function DevServices() {
  const { t, i18n } = useTranslation()

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      desc: "Building scalable MERN applications with secure backend systems and responsive frontend architecture.",
      code: "Cloud Code"
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Creating fast, responsive and interactive user interfaces using modern JavaScript and React.",
      code: "UI Code"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Designing secure APIs and backend logic using Node.js and Express with scalable server architecture.",
      code: "Server Code"
    },
    {
      icon: <FaDatabase />,
      title: "Database Architecture",
      desc: "Structuring efficient MongoDB databases for scalable, high performance applications.",
      code: "Database Code"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Deploying applications with optimized cloud infrastructure and modern DevOps practices.",
      code: "Cloud Code"
    }
  ];

  return (
    <section aria-labelledby="development-services-title" className="portfolio-services min-h-screen w-full bg-[#06080f] light:bg-[#f7faf8] text-white light:text-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <h2 id="development-services-title" className="text-4xl font-semibold tracking-tight text-emerald-100 light:text-emerald-950 md:text-5xl">
            {t("Development Services")}
          </h2>

          <p className="mt-5 text-slate-300 light:text-slate-700 max-w-2xl mx-auto">
            {t("Professional development solutions combining modern frontend interfaces with powerful backend architectures and scalable infrastructure.")}
          </p>

        </div>


        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <article key={service.title} className="portfolio-service-card">

              <div className="relative flex h-full flex-col items-center p-8 text-center">

                {/* Icon */}
                <div aria-hidden="true" className="mb-4 text-4xl text-emerald-300 light:text-emerald-800">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-emerald-100 light:text-emerald-950">
                  {t(service.title)}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-300 light:text-slate-700">
                  {t(service.desc)}
                </p>

                <span className="portfolio-service-tag">
                  <TypeAnimation key={i18n.resolvedLanguage}
                    sequence={[
                      t("React Developer"),
                      1500,
                      t("HTML Expert"),
                      1500,
                      t("CSS Specialist"),
                      1500,
                      t("MongoDB Database"),
                      1500,
                      t("Express Backend"),
                      1500,
                      t("Next.js Framework"),
                      1500,
                      t("Node.js Runtime"),
                      1500,
                      t(service.code),
                      1500
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                  />
                </span>
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DevServices;
