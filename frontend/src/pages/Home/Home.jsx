import React from 'react';
import Sliderr from '../../components/Slider/Sliderr';
import ProductMegaCard from '../../components/ProductMegaCard/ProductMegaCard';
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import NewProducts from '../../components/NewProducts/NewProducts';


function Home() {
  return (
    <div className='bg-white'>
      <Sliderr />
      <ProductSlider/>
      <ProductMegaCard />
      <NewProducts/>
    </div>
  );
}

export default Home;
