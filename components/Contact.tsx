'use client'

import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react'

const services = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out',
  'Other',
]

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Form backend/API can be connected here later.
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl"
      />

      <div className="container relative z-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">Contact Éclat</span>

          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            Ready for a cleaner
            <span className="block text-[var(--primary)]">space?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Tell us what you need and we'll help you find the right cleaning
            service for your home or business.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* ===================================================
              CONTACT INFORMATION
          ==================================================== */}

          <div className="rounded-[1.75rem] bg-[var(--dark)] p-6 text-white shadow-[0_20px_60px_rgba(11,31,42,0.12)] sm:p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
              <Sparkles size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
              Let's talk about your space.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              Whether you need a one-time cleaning or regular service, we're
              here to help. Send us a request and we'll get back to you with the
              next steps.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-5">
              {/* Phone */}
              <a
                href="tel:+10000000000"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    873 455 6670 FR
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    873 655 2430 EN
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@eclatcleaning.ca"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-white">
                    eclactservicecontact@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Ottawa & Gatineau
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Flexible scheduling
                  </p>
                </div>
              </div>
            </div>

            {/* Small promise */}
            <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-cyan-300"
              />

              <p className="text-sm leading-6 text-white/55">
                Tell us what you need and we'll help you find the right cleaning
                solution for your space.
              </p>
            </div>
          </div>

          {/* ===================================================
              FORM
          ==================================================== */}

          <div className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(11,31,42,0.08)] sm:p-8 lg:p-10">
            {!submitted ? (
              <>
                <div className="mb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Request a Quote
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[var(--dark)] sm:text-3xl">
                    Tell us about your cleaning needs.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Fill out the form below and we'll use your information to
                    understand what you're looking for.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[var(--dark)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[var(--dark)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(000) 000-0000"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[var(--dark)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                      />
                    </div>
                  </div>

                  {/* Service + Date */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                      >
                        Service
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[var(--dark)] outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                      >
                        Preferred Date
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="date"
                          name="date"
                          type="date"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-[var(--dark)] outline-none transition-all focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[var(--dark)]"
                    >
                      Tell Us More
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your space, approximate size, cleaning needs, or anything else we should know..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-[var(--dark)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[var(--dark)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:shadow-lg"
                  >
                    Request My Quote
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this form, you agree to be contacted regarding
                    your cleaning request.
                  </p>
                </form>
              </>
            ) : (
              /* =================================================
                 SUCCESS MESSAGE
              ================================================== */

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 text-[var(--primary)]">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[var(--dark)] sm:text-3xl">
                  Request received!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Thank you for reaching out to Éclat. We'll review your request
                  and get back to you with the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-[var(--dark)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  Send Another Request
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <div className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-2 text-center sm:items-center">
          <CheckCircle2
            size={16}
            className="mt-0.5 shrink-0 text-[var(--primary)] sm:mt-0"
          />

          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            No complicated process. Just tell us what you need and we'll take it
            from there.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
