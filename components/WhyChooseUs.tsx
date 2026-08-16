'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Professional Service',
    description:
      'We approach every cleaning job with professionalism, care, and attention to the details that matter.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description:
      'Your satisfaction is important to us. We listen to your needs and build our service around your space.',
  },
  {
    icon: CalendarCheck,
    title: 'Reliable & Consistent',
    description:
      'Whether you need a one-time clean or recurring service, you can count on a dependable experience.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description:
      'We go beyond the obvious and pay attention to the areas that can easily be missed during everyday cleaning.',
  },
  {
    icon: Users,
    title: 'For Homes & Businesses',
    description:
      'Our services are designed for both residential spaces and professional environments.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Comfortable Spaces',
    description:
      'Our goal is to leave your space feeling cleaner, fresher, and more comfortable.',
  },
]

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[var(--dark)] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"
      />

      <div className="container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-sm">
            Why Choose Éclat
          </span>

          <h2 className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight">
            Cleaning you can feel
            <span className="block text-cyan-300">confident about.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            We believe great cleaning is about more than making a space look
            good. It's about creating an experience you can trust, from the
            first conversation to the final result.
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.10] sm:p-6"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-300 group-hover:text-[var(--dark)]">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {reason.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <CheckCircle2 size={15} />

                  <span>Éclat standard</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            TRUST / CTA AREA
        ====================================================== */}

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:mt-14 sm:p-8 lg:mt-16 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <BadgeCheck size={19} className="text-cyan-300" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Our Promise
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                Your space deserves care you can count on.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60 sm:text-base">
                We aim to make professional cleaning simple, dependable, and
                stress-free. Tell us what you need and we'll help you find the
                right solution.
              </p>
            </div>

            {/* Right */}
            <div className="shrink-0">
              <Link
                href="/booking"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 sm:w-auto sm:px-7"
              >
                Book Your Cleaning
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
