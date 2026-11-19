import { useTranslation } from "react-i18next"
import Skills from '../component/skill/Skills'
import PageHero from '../component/common/PageHero'
import skillsHero from '../assets/images/skills-hero.webp'

function SkillPage() {
  const { t } = useTranslation()
  return (
    <main>
      <PageHero
        title={t("Full-Stack Development Skills")}
        description={t("The frontend, backend, database, and deployment tools I use to build responsive websites, web applications, and mobile apps.")}
        image={skillsHero}
        target="#technical-skills"
        action={t("Explore technical skills")}
      />
      <Skills />
    </main>
  )
}

export default SkillPage
