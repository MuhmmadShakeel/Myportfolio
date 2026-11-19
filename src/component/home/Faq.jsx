import { useTranslation } from "react-i18next"
import { useState } from "react";
import questionMark from "../../assets/images/faq-question-mark.png";
function Faq() {
  const { t } = useTranslation()

  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What full-stack development services do you offer?",
      answer:
        "I develop responsive websites, custom web applications, and mobile apps. Full-stack development can cover the user interface, backend APIs, database design, user authentication, and deployment."
    },
    {
      question: "Can you develop a mobile app and a web application for the same business?",
      answer:
        "Yes. I can build web and mobile applications around a shared backend API. That lets both platforms use the same accounts and data while giving users an interface designed for each device."
    },
    {
      question: "Can you build backend APIs and integrate third-party services?",
      answer:
        "Yes. I develop REST APIs, design databases, and connect applications to third-party services. I can build a backend for a new product or add features to an existing website or app."
    },
    {
      question: "Do you build custom dashboards and SaaS applications?",
      answer:
        "Yes. I develop custom web applications such as business dashboards, SaaS products, and internal tools. The scope depends on the workflows your users need, from managing records to viewing reports."
    },
    {
      question: "How do you handle responsive design, performance, and cloud deployment?",
      answer:
        "I design web interfaces for phones, tablets, and desktops, optimize images and initial page loads, and configure cloud hosting for the frontend, backend, and database according to the application’s needs."
    }
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };
  return (

    <section aria-labelledby="development-faq-title" className="w-full min-h-screen py-8 bg-[#06080f] light:bg-[#f7faf8] text-white light:text-slate-950 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* FAQ SECTION */}

        <div className="space-y-6">

          <h2 id="development-faq-title" className="mb-8 text-4xl font-semibold tracking-tight text-emerald-100 light:text-emerald-950 md:text-5xl">
            {t("Full-Stack Web and Mobile App Development FAQ")}
          </h2>

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-[#0a0d16] light:bg-white border border-[#009689]/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#009689]"
            >

              {/* Question */}

              <button
                type="button"
                aria-expanded={active === index}
                aria-controls={`development-faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-start focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-300 light:focus-visible:outline-emerald-700"
              >

                <span className="font-semibold text-emerald-100 light:text-emerald-950">
                  {t(faq.question)}
                </span>

                <span aria-hidden="true" className="text-xl text-emerald-300 light:text-emerald-800">
                  {active === index ? "-" : "+"}
                </span>

              </button>

              {/* Answer */}

              <div
                id={`development-faq-answer-${index}`}
                hidden={active !== index}
                className="px-6 pb-5"
              >
                <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">
                  {t(faq.answer)}
                </p>
              </div>

            </div>

          ))}

        </div>


        {/* IMAGE SECTION */}

        <div className="flex justify-center lg:mt-38">

          <img
            src={questionMark}
            loading="lazy"
            decoding="async"
            alt=""
            className="aspect-square w-full max-w-[420px] object-contain md:max-w-[480px]"
          />

        </div>

      </div>

    </section>

  );
}

export default Faq;
