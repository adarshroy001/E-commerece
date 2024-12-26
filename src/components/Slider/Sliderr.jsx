import React, { useEffect ,useState } from "react";
import "./sliderr.css";
import slider from "../../assets/slider.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


function Sliderr() {
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
    <div className="Slide-Wrapper w-[90vw] sm:w-[85vw]  h-[25vh] sm:h-[300px] md:h-[450px] m-auto mt-[20px] rounded-md">
    <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={isNavigationEnabled}
        modules={[Navigation,Autoplay]}
        className="mySwiper w-full h-full rounded-md"
      >
        <SwiperSlide>
          <img src={slider}  className="slide-img w-full h-full rounded-md " />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={slider}  className="slide-img w-full h-full rounded-md" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={slider}  className="slide-img w-full h-full rounded-md" />
        </SwiperSlide>
    </Swiper>
    </div>
  );
}

export default Sliderr;
