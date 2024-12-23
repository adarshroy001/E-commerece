import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
//
import food_5 from '../../assets/food_5.png';
import food_7 from '../../assets/food_7.png';
import food_9 from '../../assets/food_9.png';

function ImageSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="image w-1/2 p-5 ">
                <Swiper
                    
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2  rounded-xl"
                >
                    <SwiperSlide>
                      <img src={food_5} className='rounded-xl object-fill mt-5'/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={food_7} className='rounded-xl object-fill mt-5' />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={food_9} className='rounded-xl object-fill mt-5' />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper rounded-xl"
                >
                    <SwiperSlide>
                      <img src={food_5} className='rounded-xl object-fill mt-5' />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={food_7} className='rounded-xl object-fill mt-5' />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={food_9} className='rounded-xl object-fill mt-5' />
                    </SwiperSlide>
                </Swiper>
                </div>
  )
}

export default ImageSection