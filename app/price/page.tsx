'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Star } from 'lucide-react'

const packages = [
  {
    name: 'Essential Clean',
    description:
      'Perfect for keeping your home or space fresh and maintained on a regular basis.',
    price: 'Get a Quote',
    features: [
      'Dusting and surface cleaning',
      'Vacuuming and floor care',
      'Kitchen cleaning',
      'Bathroom cleaning',
      'Trash removal',
    ],
    popular: false,
  },
  {
    name: 'Deep Clean',
    description:
      'A more detailed cleaning for spaces that need extra attention from top to bottom.',
    price: 'Get a Quote',
    features: [
      'Everything in Essential Clean',
      'Detailed kitchen cleaning',
      'Detailed bathroom cleaning',
      'Baseboards and high-touch areas',
      'Extra attention to hard-to-reach areas',
    ],
    popular: true,
  },
  {
    name: 'Move-In / Move-Out',
    description:
      'A detailed clean designed to help you leave a space spotless or start fresh in a new one.',
    price: 'Get a Quote',
    features: [
      'Kitchen and appliance surfaces',
      'Bathroom deep cleaning',
      'Floor and surface cleaning',
      'Cabinets and interior areas',
      'Final detailed clean',
    ],
    popular: false,
  },
]

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl"
      />

      <div className="container relative z-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">Packages</span>

          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            Simple options.
            <span className="block text-[var(--primary)]">
              Professional results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Choose the type of cleaning that fits your space. Every job is
            different, so we provide personalized quotes based on the size,
            condition, and needs of your space.
          </p>
        </div>

        {/* =====================================================
            PACKAGE CARDS
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-7">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex h-full flex-col rounded-[1.75rem] border bg-white p-6 shadow-[0_12px_40px_rgba(11,31,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,31,42,0.13)] sm:p-7 ${
                pkg.popular
                  ? 'border-[var(--primary)] lg:scale-[1.03]'
                  : 'border-slate-100'
              }`}
            >
              {/* =================================================
                  POPULAR BADGE
              ================================================== */}

              {pkg.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    <Star size={14} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* =================================================
                  ICON
              ================================================== */}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
                <Sparkles size={22} />
              </div>

              {/* =================================================
                  PACKAGE NAME
              ================================================== */}

              <h3 className="mt-5 text-2xl font-bold text-[var(--dark)]">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                {pkg.description}
              </p>

              {/* =================================================
                  PRICE
              ================================================== */}

              <div className="mt-6 border-y border-slate-100 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Pricing
                </p>

                <p className="mt-1 text-xl font-bold text-[var(--dark)]">
                  {pkg.price}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Personalized to your space
                </p>
              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-6 flex-1">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--dark)]">
                  What's included
                </p>

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-light)] text-[var(--primary)]">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-8">
                <Link
                  href="/booking"
                  className={`group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[var(--dark)] text-white hover:bg-[var(--primary)]'
                      : 'border border-slate-200 bg-white text-[var(--dark)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                  }`}
                >
                  Get a Quote
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            CUSTOM CLEANING CTA
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[1.75rem] bg-[var(--dark)] px-6 py-8 text-white sm:mt-12 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <Sparkles size={17} className="text-cyan-300" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Need something different?
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                We can create a cleaning plan around your needs.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
                Have a larger space, recurring cleaning needs, or a specific
                request? Tell us what you're looking for and we'll help create
                the right plan.
              </p>
            </div>

            <Link
              href="/booking"
              className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 sm:w-auto sm:px-7"
            >
              Request a Custom Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
