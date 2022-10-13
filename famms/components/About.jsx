import React from 'react'
import Title from './ui/Title'
import {FaTruck,FaGrinStars} from 'react-icons/fa'
import {TbDiscount2} from 'react-icons/tb'

const About = () => {
  return (
    <div className='container mx-auto py-20'>
        <div className='text-center'><Title addClass={"after:content-[''] after:block after:w-[70px] after:h-[5px] after:bg-primary after:my-[20px] after:mx-auto font-medium"}>Why Shop With Us</Title></div>
        <div className='flex md:flex-row flex-col gap-y-5 flex-nowrap gap-x-5 mt-11 md:px-0 px-5'>
            <div className='bg-secondary text-center inline-block text-white px-12 py-14 rounded-md'>
                <span className='flex justify-center text-6xl pb-4'>
                    <FaTruck/>
                </span>
                <h1 className='font-bold text-xl pb-2'>Fast Delivery</h1>
                <p>variations of passages of Lorem Ipsum available</p>
            </div>
            <div className='bg-secondary text-center inline-block text-white px-12 py-14 rounded-md'>
                <span className='flex justify-center text-6xl pb-4'>
                    <TbDiscount2/>
                </span>
                <h1 className='font-bold text-xl pb-2'>Free Shiping</h1>
                <p>variations of passages of Lorem Ipsum available</p>
            </div>
            <div className='bg-secondary text-center inline-block text-white px-12 py-14 rounded-md'>
                <span className='flex justify-center text-6xl pb-4'>
                    <FaGrinStars/>
                </span>
                <h1 className='font-bold text-xl pb-2'>Best Quality</h1>
                <p>variations of passages of Lorem Ipsum available</p>
            </div>
        </div>
    </div>
  )
}

export default About