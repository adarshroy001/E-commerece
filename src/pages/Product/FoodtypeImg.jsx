import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';

function FoodtypeImg({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <div>       
               <div className='xl:h-96 '>
                    <Swiper
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2 rounded-xl !ml-4 sm:!ml-8 w-[85%] sm:w-[90%] xl:w-[75%] !h-[100%]"
                    >
                      {
                        images.map((item)=>(
                          <SwiperSlide className=''>
                          <img src={item} className='rounded-xl object-fill w-full h-full p-1'/>
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
               </div>
                <div className='overflow-y-auto'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={6}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper rounded-xl !ml-5 sm:!ml-9 "
                 >
                  {
                    images.map((item)=>(
                      <SwiperSlide className='!w-24 !h-24'>
                      <img src={item} className='rounded-xl object-fill mt-3 ' />
                    </SwiperSlide>
                    ))
                  }
                  </Swiper>
                </div>
                
      </div>   
  )
}
export default FoodtypeImg
