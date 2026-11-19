import { useTranslation } from "react-i18next"
import { Mail, Smartphone, MapPin, Send } from 'lucide-react'
import { contactEmail, whatsAppUrl } from '../../contactDetails'

function Contact() {
  const { t } = useTranslation()
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      t('Project inquiry: {{value}}', { value: form.get('subject').trim() }),
      t('Name: {{value}}', { value: form.get('from_name').trim() }),
      t('Email: {{value}}', { value: form.get('reply_to').trim() }),
      '',
      form.get('message').trim(),
    ].join('\n')

    window.location.assign(`${whatsAppUrl}?text=${encodeURIComponent(message)}`)
  }

  const fieldClass = 'mt-1.5 w-full rounded-lg border border-white/15 light:border-emerald-900/20 bg-[#0a121a] light:bg-[#f3f8f5] px-3 py-2.5 text-white light:text-slate-950 outline-none transition placeholder:text-slate-400 light:placeholder:text-slate-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/20'

  return (
    <section
      aria-labelledby="contact-section-title"
      className="grid min-h-svh items-center bg-[#080e14] light:bg-[#eff6f2] px-4 py-6 text-white light:text-slate-950 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-6 lg:gap-10">
        <div className="rounded-2xl border border-emerald-200/15 light:border-emerald-900/20 bg-linear-to-br from-emerald-950/65 light:from-emerald-100/85 to-[#0b161e] light:to-white p-4 sm:p-7">
          <h2 id="contact-section-title" className="text-3xl font-semibold tracking-tight text-emerald-50 light:text-emerald-950 sm:text-4xl">
            {t("Tell me about your project")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-700">
            {t("Share what you want to build, who it’s for, and any deadlines or examples you have.")}
          </p>

          <address className="mt-5 grid gap-3 border-t border-white/10 light:border-emerald-900/15 pt-5 text-sm not-italic text-slate-200 light:text-slate-800">
            <a href={`mailto:${contactEmail}`} className="flex w-fit items-center gap-3 rounded-sm hover:text-emerald-200 light:hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
              <Mail size={18} className="text-emerald-300 light:text-emerald-800" aria-hidden="true" /> <bdi>{contactEmail}</bdi>
            </a>
            <a href={whatsAppUrl} className="flex w-fit items-center gap-3 rounded-sm hover:text-emerald-200 light:hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
              <Smartphone size={18} className="text-emerald-300 light:text-emerald-800" aria-hidden="true" /> {t("Chat on WhatsApp")}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-emerald-300 light:text-emerald-800" aria-hidden="true" /> {t("Lahore, Pakistan")}
            </p>
          </address>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-title"
          className="grid scroll-mt-4 gap-3 rounded-2xl border border-emerald-200/15 light:border-emerald-900/20 bg-[#0c1720] light:bg-white p-4 sm:grid-cols-2 sm:gap-x-4 sm:p-6"
        >
          <h3 id="contact-form-title" className="mb-1 text-lg font-semibold text-emerald-50 light:text-emerald-950 sm:col-span-2">{t("Send a message")}</h3>

          <label className="block text-sm font-medium text-slate-200 light:text-slate-800">
            {t("Full Name")}
            <input type="text" name="from_name" autoComplete="name" maxLength={100} required className={fieldClass} placeholder={t("Your full name")} />
          </label>

          <label className="block text-sm font-medium text-slate-200 light:text-slate-800">
            {t("Email Address")}
            <input type="email" name="reply_to" autoComplete="email" maxLength={254} required className={fieldClass} placeholder="you@example.com" />
          </label>

          <label className="block text-sm font-medium text-slate-200 light:text-slate-800 sm:col-span-2">
            {t("Project Subject")}
            <input type="text" name="subject" maxLength={150} required className={fieldClass} placeholder={t("What would you like to build?")} />
          </label>

          <label className="block text-sm font-medium text-slate-200 light:text-slate-800 sm:col-span-2">
            {t("Message")}
            <textarea name="message" maxLength={4000} rows={3} required className={fieldClass} placeholder={t("Tell me about your goals and requirements.")} />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700 sm:justify-self-start"
          >
            <Send size={16} aria-hidden="true" />
            {t("Continue to WhatsApp")}
          </button>

          <p className="self-center text-sm text-slate-300 light:text-slate-700">
            {t("Review and send your message in WhatsApp.")}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
