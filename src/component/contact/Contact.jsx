import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Mail, Smartphone, MapPin } from 'lucide-react'

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ loading: false, message: '', type: '' })

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    })

    emailjs.init('-W9S2t2MMuOPmBuNu')
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, message: 'Sending your message...', type: '' })

    try {
      await emailjs.sendForm(
        'service_jvkvid2',
        'template_w7l61rw',
        formRef.current
      )

      setStatus({ loading: false, message: 'Message sent successfully. I will reply soon.', type: 'success' })
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        loading: false,
        message: 'Something went wrong. Please try again later.',
        type: 'error'
      })
    }
  }

  return (
    <section className="relative min-h-screen bg-[#05070d] text-white px-4 py-16 sm:px-6 md:px-10 lg:px-20 font-[Orbitron] overflow-hidden">

      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-br from-[#009689]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-30 top-20 w-72 h-72 rounded-full bg-[#00c4b4]/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-[#00c4b4] mb-3">Connect With Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Contact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-7">
            Share your project requirements, collaboration ideas or a quick hello. I&apos;m ready to turn your concept
            into a polished digital experience.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6" data-aos="fade-right">
            <div className="rounded-[28px] border border-[#009689]/20 bg-[#0b1220]/80 p-8 shadow-[0_40px_120px_rgba(0,150,137,0.08)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#00c4b4] mb-4">Contact Info</p>
              <h3 className="text-3xl font-semibold text-white mb-6">Let&apos;s build something great together.</h3>
              <p className="text-gray-300 leading-8">
                I respond quickly to meaningful opportunities. Use the form to send a message directly or choose any
                preferred channel below.
              </p>

              <div className="mt-10 space-y-5">
                <article className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#07101d] p-5">
                  <span className="mt-1 text-[#00c4b4]"><Mail size={22} /></span>
                  <div>
                    <p className="text-sm uppercase text-[#00c4b4]">Email</p>
                    <p className="text-gray-200">hello@shakidev.dev</p>
                  </div>
                </article>

                <article className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#07101d] p-5">
                  <span className="mt-1 text-[#00c4b4]"><Smartphone size={22} /></span>
                  <div>
                    <p className="text-sm uppercase text-[#00c4b4]">Phone</p>
                    <p className="text-gray-200">+92 300 123 4567</p>
                  </div>
                </article>

                <article className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#07101d] p-5">
                  <span className="mt-1 text-[#00c4b4]"><MapPin size={22} /></span>
                  <div>
                    <p className="text-sm uppercase text-[#00c4b4]">Location</p>
                    <p className="text-gray-200">Lahore, Pakistan</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#009689]/15 bg-[#0b1220]/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#00c4b4] mb-4">Quick Tips</p>
              <ul className="space-y-3 text-gray-300">
                <li>• Keep your brief clear and concise.</li>
                <li>• Add deadlines or timelines if available.</li>
                <li>• Mention any design direction or examples.</li>
              </ul>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full rounded-4xl border border-[#009689]/20 bg-[#07101d]/95 p-8 shadow-[0_50px_140px_rgba(0,150,137,0.08)] backdrop-blur-xl"
            data-aos="fade-left"
          >
            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm font-medium text-gray-300">Full Name</span>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="mt-3 w-full rounded-3xl border border-[#ffffff14] bg-[#0a1220] px-5 py-4 text-gray-100 outline-none transition focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20"
                  placeholder="Your full name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-300">Email Address</span>
                <input
                  type="email"
                  name="reply_to"
                  required
                  className="mt-3 w-full rounded-3xl border border-[#ffffff14] bg-[#0a1220] px-5 py-4 text-gray-100 outline-none transition focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-300">Project Subject</span>
                <input
                  type="text"
                  name="subject"
                  required
                  className="mt-3 w-full rounded-3xl border border-[#ffffff14] bg-[#0a1220] px-5 py-4 text-gray-100 outline-none transition focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20"
                  placeholder="What would you like to build?"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-300">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="mt-3 w-full rounded-3xl border border-[#ffffff14] bg-[#0a1220] px-5 py-4 text-gray-100 outline-none transition focus:border-[#00c4b4] focus:ring-2 focus:ring-[#00c4b4]/20"
                  placeholder="Tell me about your idea, goals and requirements."
                />
              </label>

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center justify-center rounded-3xl bg-linear-to-r from-[#00c4b4] to-[#009689] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#05070d] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
