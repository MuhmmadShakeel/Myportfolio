import { ArrowDown } from "lucide-react";

export default function PageHero({ title, description, image, target, action }) {
  return (
    <header aria-labelledby="page-hero-title" className="relative isolate grid min-h-[27rem] place-items-center overflow-hidden border-b border-emerald-200/15 light:border-emerald-900/20 bg-[#0b171b] light:bg-[#e8f3ed] px-6 py-20 text-center text-white light:text-slate-950 sm:min-h-[32rem]">
      {image ? (
        <img src={image} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-size-[40px_40px] [background-image:linear-gradient(to_right,#6ee7b733_1px,transparent_1px),linear-gradient(to_bottom,#6ee7b733_1px,transparent_1px)]" />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 [background-image:var(--page-hero-shade)]" />
      <div className="mx-auto max-w-3xl">
        <h1 id="page-hero-title" className="text-balance text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-emerald-50 light:text-emerald-950">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-200 light:text-slate-800 sm:text-lg">{description}</p>
        <a href={target} className="mt-8 inline-flex items-center gap-2 rounded-lg border border-emerald-200/35 light:border-emerald-900/25 bg-[#0b171b]/80 light:bg-white/85 px-5 py-3 font-semibold text-emerald-100 light:text-emerald-950 transition-colors hover:border-emerald-300 hover:bg-emerald-950 light:hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700">
          {action} <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
