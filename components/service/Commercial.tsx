import React from 'react'
import Image from 'next/image'
import { type ServiceType } from '@/utils/core'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Commercial = ({ icon, service, desc, alt }: ServiceType) => {
  return (
    <article className="modern-card group overflow-hidden">
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={icon}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--dark)] backdrop-blur">
            Éclat Services
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h2 className="text-2xl font-bold text-[var(--dark)]">{service}</h2>

        <p className="mt-4 min-h-[90px] leading-7 text-slate-500">{desc}</p>

        <Link
          href={`/price#${
            service.toLowerCase() === 'residential cleaning'
              ? 'residential'
              : 'commercial'
          }`}
          className="group/btn mt-6 inline-flex items-center gap-2 font-bold text-[var(--primary-color)]"
        >
          View Pricing
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
          />
        </Link>
      </div>
    </article>
  )
}

export default Commercial
