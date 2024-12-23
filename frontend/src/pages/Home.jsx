import React from 'react'
import Sliderr from '../components/Slider/Sliderr'
import ProductMiniCard from '../components/ProductMiniCard/ProductMiniCard'
import ProductMegaCard from '../components/ProductMegaCard/ProductMegaCard'

function Home() {
  return (
   <>
    <Sliderr/>
    <div className='flex justify-center flex-wrap'>
    <ProductMiniCard/>
    <ProductMiniCard/>
    <ProductMiniCard/>
    <ProductMiniCard/>
    <ProductMiniCard/>
    <ProductMiniCard/>
    </div>
    <div>
    <ProductMegaCard/>
    </div>
    
   </>
  )
}

export default Home