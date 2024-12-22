import React from "react";
import "./sliderr.css";
import slider from "../../assets/slider.png";
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


function Sliderr() {


  return (
    <div className="Slide-Wrapper">
    <Swiper
        loop={true}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Scrollbar,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider} alt="Slide 1 w-[900px] h-[600px]" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={slider} alt="Slide 2 w-[900px] h-[600px]" className="slide-img" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={slider} alt="Slide 3 w-[900px] h-[600px]" className="slide-img" />
        </SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Sliderr;
