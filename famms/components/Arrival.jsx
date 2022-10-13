import Image from 'next/image'
import React from 'react'
import Title from './ui/Title'

const Arrival = () => {
  return (
    <div className='bg-third w-full h-[500px] mb-20'>
       <div className='container mx-auto flex justify-between w-full h-full'>
            <div className='relative md:w-3/5 w-0 h-full md:ml-10 object-left-top'>
                <Image className='align-middle' src={"/images/arrival-bg.png"} alt="arival" layout='fill'/>
            </div>
            <div className='md:w-2/5 w-full mr-10 flex flex-col items-baseline justify-center gap-y-5 md:m-0 m-4'>
                <Title addClass={"text-[3.5rem] text-secondary"}>#NewArrivals</Title>
                <p>Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!</p>
                <button className='btn-primary'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Arrival