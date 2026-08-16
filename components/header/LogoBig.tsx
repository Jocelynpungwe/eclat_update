import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo-eclat.png'

const LogoBig = () => {
  return (
    <Image
      src={logo}
      alt="Éclat Services de Nettoyage"
      width={90}
      height={90}
      className="h-16 w-16 object-contain"
      priority
    />
  )
}

export default LogoBig
