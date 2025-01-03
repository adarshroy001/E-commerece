import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import popres1 from '../../assets/popularRes1.jpg'
import popres2 from '../../assets/PopularRes2.jpg'

function ResPhoto() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <>       
               <div className='!h-60 mb-5 '>
                    <Swiper
                        slidesPerView={1}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2  w-[95%] rounded-sm  h-full"
                    >
                        <SwiperSlide>
                          <img src={popres1} className='rounded-sm object-fill min-h-60 '/>
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres2} className='rounded-sm object-fill min-h-60' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres1} className='rounded-sm object-fill min-h-60' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={popres2} className='rounded-sm object-fill min-h-60' />
                        </SwiperSlide>
                    </Swiper>
               </div>
                
      </>   
  )
}
export default ResPhoto