import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo-eclat.png'

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Éclat Services de Nettoyage"
      width={72}
      height={72}
      className="h-14 w-14 object-contain"
      priority
    />
  )
}

export default Logo
