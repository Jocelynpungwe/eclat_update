'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Tell us about your home or business, the type of cleaning you need, and any specific areas you want us to focus on.',
    icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description:
      "We'll review your needs and provide a personalized quote based on your space, cleaning requirements, and schedule.",
    icon: CalendarCheck,
  },
  {
    number: '03',
    title: 'We Clean Your Space',
    description:
      'Our team arrives ready to work and takes care of your cleaning with professionalism and attention to detail.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Enjoy the Results',
    description:
      'Sit back and enjoy a cleaner, fresher, more comfortable space without the stress of doing it yourself.',
    icon: CheckCircle2,
  },
]

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-50 blur-3xl"
      />

      <div className="container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">How It Works</span>

          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            A cleaner space in
            <span className="block text-[var(--primary)]">
              four simple steps.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We&apos;ve made the process simple. Tell us what you need,
            we&apos;ll take care of the details, and you can get back to
            enjoying your space.
          </p>
        </div>

        {/* =====================================================
            STEPS
        ====================================================== */}

        <div className="relative mx-auto mt-12 max-w-6xl sm:mt-14 lg:mt-16">
          {/* Desktop connecting line */}

          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[46px] hidden h-px bg-slate-200 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <div key={step.number} className="group relative">
                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div className="relative h-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-[0_10px_35px_rgba(11,31,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,31,42,0.11)] sm:p-6">
                    {/* Number + Icon */}

                    <div className="relative flex items-center justify-between">
                      {/* Step number */}

                      <span className="text-sm font-black tracking-wider text-slate-200 transition-colors duration-300 group-hover:text-cyan-100">
                        {step.number}
                      </span>

                      {/* Icon */}

                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:shadow-lg">
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Content */}

                    <h3 className="mt-6 text-lg font-bold text-[var(--dark)] sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                    {/* Bottom accent */}

                    <div className="mt-6 h-1 w-10 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-0 rounded-full bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-5xl rounded-[1.75rem] bg-[var(--dark)] px-6 py-8 text-center sm:mt-14 sm:px-10 sm:py-10 lg:mt-16">
          <div className="mx-auto max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Ready to get started?
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s get your space looking its best.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">
              Request your personalized quote and take the first step toward a
              cleaner, more comfortable space.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 sm:w-auto sm:px-7"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-7"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
