'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookCheck,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  UserPen,
} from 'lucide-react'

const bookingOptions = [
  {
    title: 'Client Hub',
    description:
      'Already a client? Access your appointments, quotes, invoices, payments, and other client information from the Client Hub.',
    button: 'Login to Client Hub',
    href: 'https://clienthub.getjobber.com/client_hubs/44a6a7a5-0f32-415b-ad8e-ed5d4233c4f9/login/new?source=share_login',
    icon: UserPen,
    featured: false,
  },
  {
    title: 'Book an Appointment',
    description:
      'Ready to schedule your cleaning? Book an appointment directly through our online booking system.',
    button: 'Book Now',
    href: 'https://clienthub.getjobber.com/booking/b320892b-cffa-48a2-9bf7-2eef827132f8',
    icon: BookCheck,
    featured: true,
  },
  {
    title: 'Get a Free Quote',
    description:
      'Not sure which service is right for you? Tell us what you need and request a personalized quote.',
    button: 'Get Free Quote',
    href: 'https://clienthub.getjobber.com/client_hubs/44a6a7a5-0f32-415b-ad8e-ed5d4233c4f9/public/work_request/new?source=social_media',
    icon: MessageCircle,
    featured: false,
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose an option',
    description:
      'Request a free quote or book your cleaning appointment directly.',
    icon: BookCheck,
  },
  {
    number: '02',
    title: 'Enter your information',
    description:
      'Use your email and provide the details we need to help with your service.',
    icon: UserPen,
  },
  {
    number: '03',
    title: 'Stay connected',
    description:
      'Your quote, appointment, invoice, and payment information can be managed through the Client Hub.',
    icon: MessageCircle,
  },
]

const Page = () => {
  return (
    <main className="relative overflow-hidden bg-[var(--background)]">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-cyan-100/50
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[40rem]
          h-96
          w-96
          rounded-full
          bg-teal-100/40
          blur-3xl
        "
      />

      <div className="container relative z-10 py-24 sm:py-28 lg:py-32">
        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">
            Booking &amp; Quotes
          </span>

          <h1
            className="
              mt-3
              text-[clamp(2.25rem,6vw,4.5rem)]
              font-bold
              leading-[1.05]
              tracking-tight
              text-[var(--dark)]
            "
          >
            Let&apos;s get your space
            <span className="block text-[var(--primary)]">
              looking its best.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
              sm:leading-8
            "
          >
            Whether you&apos;re ready to book, need a free quote, or want to
            manage an existing service, choose the option that works best for
            you.
          </p>
        </div>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="mx-auto mt-12 max-w-6xl sm:mt-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              bg-[var(--dark)]
              px-6
              py-8
              shadow-[0_20px_60px_rgba(11,31,42,0.12)]
              sm:px-8
              sm:py-10
              lg:px-10
            "
          >
            {/* Decorative circles */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-20
                h-64
                w-64
                rounded-full
                bg-teal-400/5
                blur-3xl
              "
            />

            <div className="relative z-10">
              {/* Section heading */}

              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-cyan-300" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-cyan-300
                      sm:text-xs
                    "
                  >
                    How it works
                  </span>
                </div>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Getting started is simple.
                </h2>
              </div>

              {/* Steps */}

              <div
                className="
                  mt-8
                  grid
                  gap-6
                  md:grid-cols-3
                  md:gap-5
                "
              >
                {steps.map((step) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={step.number}
                      className="
                        relative
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-5
                        transition-all
                        duration-300
                        hover:border-cyan-300/20
                        hover:bg-white/[0.07]
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            text-[var(--primary)]
                          "
                        >
                          <Icon size={19} />
                        </div>

                        <span
                          className="
                            text-xs
                            font-bold
                            tracking-[0.15em]
                            text-white/25
                          "
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-4 text-base font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOOKING OPTIONS
        ====================================================== */}

        <section className="mx-auto mt-12 max-w-6xl sm:mt-14">
          <div className="mb-7 text-center">
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[var(--primary)]
                sm:text-xs
              "
            >
              Choose what you need
            </span>

            <h2
              className="
                mt-2
                text-2xl
                font-bold
                text-[var(--dark)]
                sm:text-3xl
              "
            >
              How can we help?
            </h2>
          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-3
              md:gap-6
            "
          >
            {bookingOptions.map((option) => {
              const Icon = option.icon

              return (
                <article
                  key={option.title}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(11,31,42,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(11,31,42,0.11)]
                    sm:p-7
                    ${
                      option.featured
                        ? 'border-[var(--primary)]'
                        : 'border-slate-100'
                    }
                  `}
                >
                  {/* Featured badge */}

                  {option.featured && (
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-[var(--secondary-light)]
                        px-3
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[var(--primary)]
                      "
                    >
                      Recommended
                    </div>
                  )}

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--secondary-light)]
                      text-[var(--primary)]
                      transition-all
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon size={22} />
                  </div>

                  {/* Content */}

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                      leading-tight
                      text-[var(--dark)]
                    "
                  >
                    {option.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      flex-1
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {option.description}
                  </p>

                  {/* Benefits */}

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[var(--primary)]"
                      />
                      Easy online process
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[var(--primary)]"
                      />
                      Quick and convenient
                    </div>
                  </div>

                  {/* Button */}

                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group/button
                      mt-6
                      flex
                      min-h-[50px]
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
                        option.featured
                          ? 'bg-[var(--dark)] text-white hover:bg-[var(--primary)]'
                          : 'border border-slate-200 text-[var(--dark)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                      }
                    `}
                  >
                    {option.button}

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        {/* =====================================================
            BOTTOM TRUST MESSAGE
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            text-center
            sm:mt-12
          "
        >
          <div className="flex items-center gap-2 text-[var(--primary)]">
            <CheckCircle2 size={17} />

            <span className="text-sm font-bold">
              Simple, convenient, and personalized
            </span>
          </div>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Not sure which option to choose? Start with a free quote and
            we&apos;ll help you find the right cleaning service for your space.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
