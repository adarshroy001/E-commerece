import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductMiniCard from '../../components/ProductMiniCard/ProductMiniCard';

function ProductSlider() {
  return (
    <div className="w-[85vw] mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-gray-800">POPULAR PRODUCTS</p>
        <button className="text-blue-500 font-medium flex items-center hover:underline">
          View All <span className="ml-1">&rarr;</span>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={4}
        spaceBetween={20} // Adds spacing between the cards
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiperr"
      >
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <ProductMiniCard />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;

