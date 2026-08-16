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
      className="relative overflow-hidden bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl"
      />

      <div className="container relative z-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">Packages</span>

          <h2 className="mt-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            Simple options.
            <span className="block text-[var(--primary)]">
              Professional results.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Choose the type of cleaning that fits your space. Every job is
            different, so we provide personalized quotes based on the size,
            condition, and needs of your space.
          </p>
        </div>

        {/* =====================================================
            PACKAGE CARDS
        ====================================================== */}

        <div className="mx-auto mt-9 grid max-w-6xl gap-5 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`
                relative
                flex
                flex-col
                rounded-[1.5rem]
                border
                bg-white
                p-5
                shadow-[0_8px_30px_rgba(11,31,42,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_45px_rgba(11,31,42,0.11)]
                sm:p-6
                ${
                  pkg.popular
                    ? 'border-[var(--primary)] lg:scale-[1.02]'
                    : 'border-slate-100'
                }
              `}
            >
              {/* =================================================
                  POPULAR BADGE
              ================================================== */}

              {pkg.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--primary)] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-md">
                    <Star size={13} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* =================================================
                  ICON
              ================================================== */}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
                <Sparkles size={20} />
              </div>

              {/* =================================================
                  PACKAGE NAME
              ================================================== */}

              <h3 className="mt-4 text-xl font-bold leading-tight text-[var(--dark)] sm:text-2xl">
                {pkg.name}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {pkg.description}
              </p>

              {/* =================================================
                  PRICE
              ================================================== */}

              <div className="mt-5 border-y border-slate-100 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Pricing
                </p>

                <p className="mt-1 text-lg font-bold text-[var(--dark)]">
                  {pkg.price}
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  Personalized to your space
                </p>
              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--dark)]">
                  What's included
                </p>

                <ul className="space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--secondary-light)] text-[var(--primary)]">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-6">
                <Link
                  href="/booking"
                  className={`
                    group
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    ${
                      pkg.popular
                        ? 'bg-[var(--dark)] text-white hover:bg-[var(--primary)]'
                        : 'border border-slate-200 bg-white text-[var(--dark)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                    }
                  `}
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
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

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[1.5rem] bg-[var(--dark)] px-5 py-7 text-white sm:mt-10 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* =================================================
                CTA TEXT
            ================================================== */}

            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-300" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300 sm:text-xs">
                  Need something different?
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                We can create a cleaning plan around your needs.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                Have a larger space, recurring cleaning needs, or a specific
                request? Tell us what you're looking for and we'll help create
                the right plan.
              </p>
            </div>

            {/* =================================================
                CTA BUTTON
            ================================================== */}

            <Link
              href="/booking"
              className="
                group
                inline-flex
                min-h-[48px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[var(--dark)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-50
                hover:shadow-lg
                sm:w-auto
              "
            >
              Request a Custom Quote
              <ArrowRight
                size={17}
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
