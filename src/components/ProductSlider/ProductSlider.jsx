import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductMiniCardSliderVersion from '../../components/ProductMiniCard/ProductMiniCardSliderVersion';

function ProductSlider() {
      const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);
      useEffect(()=>{
        const handleResize = ()=>{
          setIsNavigationEnabled(window.innerWidth >= 640);
        }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
        
      },[])
  return (
    <div className="w-[90vw] xl:w-[85vw] mx-auto mt-8    ">
      <div className="flex justify-between items-center ">
        <p className=" capitalize text-xl font-bold sm:uppercase  sm:text-2xl sm:font-semibold  text-gray-800">Popular Products</p>
        <button className=" h-8  px-3 sm:hover:bg-[#edeef5] border  border-[#e2e3eb]  rounded-3xl active:scale-95 transition">
           <span className='text-sm text-gray-600 font-normal text-center'>View More </span><span className="text-gray-600">&rarr;</span>
        </button>
      </div>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5, 
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10, 
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10, 
          },
        }}
        loop={true}
        navigation={isNavigationEnabled}
        modules={[Navigation, Autoplay]}
        className="mySwiperr"
      >
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center mt-6 mb-6 ">
              <ProductMiniCardSliderVersion  className='!w-full'/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
