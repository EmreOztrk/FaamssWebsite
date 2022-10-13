import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='relative w-64 h-11'><Image src={"/images/logo.png"} alt="logo" layout='fill'/></div>
  )
}

export default Logo