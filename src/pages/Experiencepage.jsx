import { useTranslation } from "react-i18next"
import Experience from '../component/experience/Experience'
import PageHero from '../component/common/PageHero'
import experienceHero from '../assets/images/experience-hero.webp'

function Experiencepage() {
  const { t } = useTranslation()
  return (
    <main className="overflow-hidden">
      <PageHero
        title={t("Experience & Education")}
        description={t("My path through frontend development, backend APIs, full-stack projects, and graduation.")}
        image={experienceHero}
        target="#experience-timeline"
        action={t("Explore the timeline")}
      />
      <Experience />
    </main>
  )
}

export default Experiencepage
