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
        // Initial check
      handleResize();
  
      // Add resize event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
        
      },[])
  return (
    <div className="w-[90vw] sm:w-[85vw] mx-auto mt-8    ">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <p className="text-2xl font-semibold text-gray-800">POPULAR PRODUCTS</p>
        <button className=" h-8  px-3 hover:bg-[#edeef5] border  border-[#e2e3eb]  rounded-3xl active:scale-95 transition">
           <span className='text-sm text-gray-600 font-normal text-center'>View More </span><span className="text-gray-600">&rarr;</span>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 2, // Ensures one card is visible on very small screens
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 5, // Adds more spacing on small devices
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5, // Adjusted for medium devices
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10, // Adjusted for large devices
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10, // Extra spacing for very large screens
          },
        }}
        loop={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        navigation={isNavigationEnabled}
        modules={[Navigation, Autoplay]}
        className="mySwiperr"
      >
        {/* Render ProductMiniCard components */}
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
