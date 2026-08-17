'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/60 blur-3xl"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="container relative z-10">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="section-label justify-center">About Éclat</span>

          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            More than cleaning.
            <span className="block text-[var(--primary)]">
              We create better spaces.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Professional cleaning services built around one simple idea: your
            space should feel clean, comfortable, and cared for.
          </p>
        </div>

        {/* ===================================================
            MAIN ABOUT GRID
        ==================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative order-1 lg:order-none">
            {/* Decorative background shape */}

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-[85%] w-[85%] rounded-[2rem] border-2 border-cyan-100 sm:block"
            />

            {/* Image wrapper */}

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_25px_70px_rgba(11,31,42,0.14)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  src="/images/about-serv-2.jpg"
                  alt="Professional cleaning service by Éclat Services de Nettoyage"
                  fill
                  priority={false}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                />

                {/* Image gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/45 via-transparent to-transparent" />
              </div>

              {/* =================================================
                  IMAGE BADGE
              ================================================== */}

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[var(--dark)]">
                      Éclat Services
                    </p>

                    <p className="text-xs text-slate-500">
                      Clean spaces. Better living.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="order-2 lg:order-none">
            {/* Small label */}

            <div className="section-label">Why Choose Éclat</div>

            {/* Main heading */}

            <h3 className="mt-2 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-[var(--dark)]">
              We don&apos;t just clean.
              <span className="block text-[var(--primary)]">
                We make spaces feel better.
              </span>
            </h3>

            {/* Main paragraph */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              At Éclat Services de Nettoyage, we take the stress out of keeping
              your space clean. We provide professional, reliable, and
              detail-focused cleaning services designed around the way you live
              and work.
            </p>

            {/* Second paragraph */}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Whether you need regular cleaning for your home, a deep clean when
              your space needs extra attention, or dependable service for your
              business, our goal is to make the entire experience simple,
              convenient, and consistent.
            </p>

            {/* =================================================
                VALUES GRID
            ================================================== */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Professional */}

              <div className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--dark)]">
                      Professional
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      A professional experience from start to finish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reliable */}

              <div className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--dark)]">Reliable</h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Dependable cleaning you can count on.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer First */}

              <div className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <HeartHandshake size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--dark)]">
                      Customer First
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Your satisfaction is at the heart of what we do.
                    </p>
                  </div>
                </div>
              </div>

              {/* Attention to Detail */}

              <div className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--dark)]">
                      Attention to Detail
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      We don&apos;t overlook the little things.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                TRUST STATEMENT
            ================================================== */}

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4 sm:p-5">
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-[var(--primary)]"
              />

              <p className="text-sm leading-6 text-slate-600">
                <strong className="text-[var(--dark)]">
                  Your space matters.
                </strong>{' '}
                That&apos;s why we focus on dependable service, clear
                communication, and quality results every time.
              </p>
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/booking"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[var(--dark)] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] sm:w-auto sm:px-7"
              >
                Book a Cleaning
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#services"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto sm:px-7"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATISTICS
        ==================================================== */}

        <div className="mt-16 grid overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-[0_15px_45px_rgba(11,31,42,0.06)] sm:grid-cols-3 lg:mt-20">
          {/* Stat 1 */}

          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="font-bold text-[var(--dark)]">Professional</p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Quality-focused service
              </p>
            </div>
          </div>

          {/* Stat 2 */}

          <div className="flex items-center gap-4 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
              <HeartHandshake size={21} />
            </div>

            <div>
              <p className="font-bold text-[var(--dark)]">Customer Focused</p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Your satisfaction matters
              </p>
            </div>
          </div>

          {/* Stat 3 */}

          <div className="flex items-center gap-4 p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-light)] text-[var(--primary)]">
              <Sparkles size={21} />
            </div>

            <div>
              <p className="font-bold text-[var(--dark)]">Detail Driven</p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                We care about the details
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
