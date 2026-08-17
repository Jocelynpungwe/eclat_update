'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  RefreshCw,
  Sparkles,
} from 'lucide-react'

import residentialImage from '@/public/images/work2.jpg'
import commercialImage from '@/public/images/com-1.jpg'
import deepImage from '@/public/images/work4.jpg'
import moveImage from '@/public/images/floor2.jpg'

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Enjoy a cleaner, more comfortable home without spending your free time cleaning.',
    image: residentialImage,
    icon: Home,
    features: [
      'Regular home cleaning',
      'Kitchen and bathroom cleaning',
      'Dusting and vacuuming',
      'Floors and surface cleaning',
    ],
  },
  {
    title: 'Commercial Cleaning',
    description:
      'Create a clean, professional environment for your employees, customers, and clients.',
    image: commercialImage,
    icon: Building2,
    features: [
      'Office cleaning',
      'Common-area cleaning',
      'Workplace maintenance',
      'Flexible cleaning schedules',
    ],
  },
  {
    title: 'Deep Cleaning',
    description:
      'Give your space the detailed clean it needs with extra attention to areas often overlooked.',
    image: deepImage,
    icon: Sparkles,
    features: [
      'Detailed surface cleaning',
      'Kitchen deep cleaning',
      'Bathroom deep cleaning',
      'Hard-to-reach areas',
    ],
  },
  {
    title: 'Move-In / Move-Out',
    description:
      'Make moving easier with a detailed clean that leaves your space fresh and ready for what comes next.',
    image: moveImage,
    icon: RefreshCw,
    features: [
      'Empty-home cleaning',
      'Kitchen and bathroom cleaning',
      'Floor and surface cleaning',
      'Ready-for-move-in cleaning',
    ],
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-cyan-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-teal-50 blur-3xl"
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label justify-center">Our Services</span>

          <h2 className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--dark)]">
            Cleaning services that fit
            <span className="block text-[var(--primary)]">
              your space and your lifestyle.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            From everyday cleaning to detailed deep cleans, Éclat provides
            dependable services designed to keep your home or business looking
            and feeling its best.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(11,31,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(11,31,42,0.15)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--dark)]">
                  <Image
                    src={service.image}
                    alt={`${service.title} cleaning service`}
                    fill
                    priority={service.title === 'Residential Cleaning'}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  {/* Side gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

                  {/* Icon */}
                  <div className="absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white text-[var(--primary)] shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  {/* Image Text */}
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300 drop-shadow sm:text-xs">
                      Éclat Services
                    </span>

                    <h3 className="text-xl font-bold leading-tight text-white drop-shadow-lg sm:text-[21px]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]">
                      What&apos;s included
                    </p>

                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-5 text-slate-600"
                        >
                          <CheckCircle2
                            size={17}
                            strokeWidth={2.2}
                            className="mt-0.5 shrink-0 text-[var(--primary)]"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-6">
                    <Link
                      href="/booking"
                      className="group/link inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[var(--primary)]/50 px-5 py-2.5 text-sm font-bold text-[var(--dark)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:shadow-lg"
                    >
                      Get a Quote
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[1.5rem] bg-[var(--dark)] px-6 py-8 shadow-[0_15px_45px_rgba(11,31,42,0.12)] sm:mt-12 sm:px-8 sm:py-9 lg:px-10">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-cyan-300/10 bg-cyan-400/10 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-20 h-48 w-48 rounded-full border border-cyan-300/10 bg-cyan-400/5"
          />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Not sure what you need?
              </span>

              <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                We&apos;ll help you find the right cleaning service.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Tell us about your home or business and what you&apos;d like
                cleaned. We&apos;ll help you choose the service that makes the
                most sense for your space.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/booking"
              className="group inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--dark)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl sm:w-auto sm:px-8"
            >
              Request a Free Quote
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

export default Services
