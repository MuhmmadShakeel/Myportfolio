import { useState } from "react";

function Faq() {

  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern full-stack web development using the MERN stack including MongoDB, Express.js, React, and Node.js. I also build scalable APIs and responsive frontend interfaces."
    },
    {
      question: "Do you build both frontend and backend systems?",
      answer:
        "Yes. I develop complete full-stack applications including frontend UI design, backend APIs, authentication systems, and database architecture."
    },
    {
      question: "Can you deploy applications to the cloud?",
      answer:
        "Absolutely. I deploy applications using modern cloud platforms such as Vercel, Netlify, and other cloud services with optimized performance and scalability."
    },
    {
      question: "Do you work on custom web applications?",
      answer:
        "Yes. I build custom web applications tailored to specific business or product requirements including dashboards, SaaS platforms, and scalable systems."
    },
    {
      question: "Are your projects responsive and optimized?",
      answer:
        "Every project I build is fully responsive, performance optimized, and designed to deliver a smooth user experience across all devices."
    }
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };
  return (

    <section className="w-full min-h-screen py-8 bg-[#06080f] text-white px-6 font-[Orbitron]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* FAQ SECTION */}

        <div className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold text-[#009689] mb-8">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-[#0a0d16] border border-[#009689]/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#009689]"
            >

              {/* Question */}

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-2 space-y-8 flex justify-between items-center"
              >

                <span className="text-[#009689] font-semibold">
                  {faq.question}
                </span>

                <span className="text-[#00c4b4] text-xl">
                  {active === index ? "-" : "+"}
                </span>

              </button>

              {/* Answer */}

              <div
                className={`px-6 transition-all duration-500 ${
                  active === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>

          ))}

        </div>


        {/* IMAGE SECTION */}

        <div className="flex justify-center lg:mt-38">

          <div className="relative">

            {/* glow background */}

            <div className="absolute inset-0 bg-[#009689]/20 blur-3xl rounded-full"></div>

            <img
              src="https://i.pinimg.com/1200x/76/8b/48/768b482ab37c5a4f831f19508b99da0a.jpg"
              alt="faq developer"
              className="relative  w-[420px] md:w-[480px]  h-[480px]  rounded-2xl border border-[#009689]/40 shadow-xl"
            />

          </div>

        </div>

      </div>

    </section>

  );
}

export default Faq;