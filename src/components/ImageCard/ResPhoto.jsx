import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import food_5 from '../../assets/food_5.png';
import food_7 from '../../assets/food_7.png';
import food_9 from '../../assets/food_9.png';
import food_8 from '../../assets/food_8.png';
import popres1 from '../../assets/popularRes1.jpg'
import popres2 from '../../assets/PopularRes2.jpg'

function ResPhoto() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <>       
               <div>
                    <Swiper
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2  w-[85%] rounded-xl "
                    >
                        <SwiperSlide>
                          <img src={popres1} className='rounded-xl object-fill lg:min-h-40 '/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres2} className='rounded-xl object-fill lg:min-h-40' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres1} className='rounded-xl object-fill lg:min-h-40' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres2} className='rounded-xl object-fill lg:min-h-40' />
                        </SwiperSlide>
                    </Swiper>
               </div>
                <div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={6}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper rounded-xl !w-[80%]  "
                 >
                    <SwiperSlide className='!w-24 !h-24'>
                      <img src={popres1} className='rounded-xl object-fill mt-3 ' />
                    </SwiperSlide>
                    <SwiperSlide className='!w-24 !h-24'>
                    <img src={popres2} className='rounded-xl object-fill mt-3' />
                    </SwiperSlide>
                    <SwiperSlide className='!w-24 !h-24'>
                    <img src={popres1} className='rounded-xl object-fill mt-3 ' />
                    </SwiperSlide>
                    <SwiperSlide className='!w-24 !h-24'>
                    <img src={popres2} className='rounded-xl object-fill mt-3 ' />
                    </SwiperSlide>
                  </Swiper>
                </div>
                
      </>   
  )
}
export default ResPhoto