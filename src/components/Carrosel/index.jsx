import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Banner } from '../../components'

export function Carrosel() {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Banner /></SwiperSlide>
        {/* <SwiperSlide><Banner /></SwiperSlide> */}
      </Swiper>
    );
}
