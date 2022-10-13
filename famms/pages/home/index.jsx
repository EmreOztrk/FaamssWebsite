import React from 'react'
import About from '../../components/About'
import Arrival from '../../components/Arrival'
import Carousel from '../../components/Carousel'
import Products from '../../components/Products'

const index = () => {
  return (
    <div>
        <Carousel/>
        <About/> 
        <Arrival/>
        <Products/>
    </div>
  )
}

export default index