import React from 'react';
import Sliderr from '../../components/Slider/Sliderr';
import ProductMegaCard from '../../components/ProductMegaCard/ProductMegaCard';
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import NewProducts from '../../components/NewProducts/NewProducts';
import ImageCard from '../../components/ImageCard/ImageCard';
import Testimonials from '../../components/Testimonial/Testimonial';
import Cart from '../Cart/Cart'
import Signup from '../Auth/Signup';
import AuthPage from '../Auth/AuthPage';


function Home() {
  return (
    <div className=''>
      <Sliderr />
      <ProductSlider />
      <div className='w-[90vw] xl:w-[85vw] lg:h-fit mx-auto mt-4 grid grid-col-1 lg:grid-cols-10 xl:grid-cols-8 gap-4 p-1'>
        <div className='lg:col-span-3 xl:col-span-2'>
          <p className=" capitalize text-xl font-bold sm:uppercase  sm:text-2xl sm:font-semibold  text-gray-800 sm:ml-2">Featured Restaurant</p>
          <ImageCard />
        </div>
        <div className='lg:col-span-7 xl:col-span-6 mt-4 sm:mt-0'>
          <p className=" capitalize text-xl font-bold sm:uppercase  sm:text-2xl sm:font-semibold  text-gray-800 sm:ml-2">Hot Product</p>
          <ProductMegaCard />
        </div>
      </div>
      <NewProducts />
      <Testimonials />
    </div>

  );
}

export default Home;
