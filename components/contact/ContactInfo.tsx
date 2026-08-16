import React from 'react'

type ContactInfoProps = {
  icon: React.JSX.Element
  title: string
  desc: string
  descTwo?: string
}

const ContactInfo = ({ icon, title, desc, descTwo }: ContactInfoProps) => {
  return (
    <article className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </span>

      <div>
        <h4 className="font-bold text-white">{title}</h4>

        <p className="mt-1 text-sm leading-6 text-white/60">{desc}</p>

        {descTwo && (
          <p className="text-sm leading-6 text-white/60">{descTwo}</p>
        )}
      </div>
    </article>
  )
}

export default ContactInfo
