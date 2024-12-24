import React from 'react';
import Sliderr from '../../components/Slider/Sliderr';
import ProductMegaCard from '../../components/ProductMegaCard/ProductMegaCard';
import ProductSlider from '../../components/ProductSlider/ProductSlider'


function Home() {
  return (
    <>
      <Sliderr />
      <ProductSlider/>
      
      <div>
        <ProductMegaCard />
      </div>
    </>
  );
}

export default Home;
