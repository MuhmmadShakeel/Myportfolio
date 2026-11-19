import { useTranslation } from "react-i18next"
import Contact from '../component/contact/Contact'
import PageHero from '../component/common/PageHero'
import contactHero from '../assets/images/contact-hero.webp'

function ContactPage() {
  const { t } = useTranslation()
  return (
    <main className="overflow-hidden">
      <PageHero
        title={t("Contact")}
        description={t("Have a website, mobile app, or full-stack development project in mind? Tell me what you’re building and where you need help.")}
        image={contactHero}
        target="#contact-form"
        action={t("Write a project inquiry")}
      />
      <Contact />
    </main>
  )
}

export default ContactPage
