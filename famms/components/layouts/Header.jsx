import React from 'react'
import Logo from '../ui/Logo'
import {FaShoppingCart,FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    <div className=''>
        <div className='container mx-auto flex justify-between items-center py-4'>
            <div>
                <Logo/>
            </div>
            <div>
                <ul className='md:flex items-center gap-x-10 hidden'>
                    <li><a href="#" className='uppercase font-bold text-primary'>Home</a></li>
                    <li><button className='uppercase font-bold text-black'>Pages</button></li>
                    <li><a href="#" className='uppercase font-bold text-black'>Products</a></li>
                    <li><a href="#" className='uppercase font-bold text-black'>Blog</a></li>
                    <li><a href="#" className='uppercase font-bold text-black'>Contact</a></li>
                    <li className='cursor-pointer'><FaShoppingCart/></li>
                    <li className='cursor-pointer'><FaSearch/></li>
                </ul>
            </div>
            <button className='md:hidden inline-block'>
                    <GiHamburgerMenu className='text-4xl mr-2'/>
            </button>
        </div>
    </div>
  )
}

export default Header