import { useTranslation } from "react-i18next"
import { CloudUpload, Layers3, MessagesSquare } from "lucide-react";

const steps = [
  {
    Icon: MessagesSquare,
    title: "Define the scope",
    description: "We identify who will use the website or app, what they need to do, and which features belong in the first release.",
  },
  {
    Icon: Layers3,
    title: "Design and build",
    description: "I build the interface, backend APIs, and database around those workflows, then share progress so you can try the features as they take shape.",
  },
  {
    Icon: CloudUpload,
    title: "Test and launch",
    description: "I test the main workflows and check how the interface behaves across screen sizes before deploying the application.",
  },
];

export default function AboutProcess() {
  const { t } = useTranslation()
  return (
    <section aria-labelledby="about-process-title" className="border-t border-emerald-200/10 light:border-emerald-900/15 bg-[#0b1218] light:bg-[#f4f8f5] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 id="about-process-title" className="text-3xl font-semibold tracking-tight text-emerald-50 light:text-emerald-950 sm:text-5xl">
          {t("How I build web and mobile apps")}
        </h2>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.title} className="rounded-xl border border-white/10 light:border-emerald-900/15 bg-white/[0.035] light:bg-white p-6 transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/5 sm:p-8">
              <step.Icon aria-hidden="true" size={26} className="text-emerald-300 light:text-emerald-800" />
              <h3 className="mt-5 text-xl font-semibold text-emerald-50 light:text-emerald-950">{t(step.title)}</h3>
              <p className="mt-3 leading-relaxed text-slate-300 light:text-slate-700">{t(step.description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
