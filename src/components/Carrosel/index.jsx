import React from 'react';

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';

import { Banner } from '../../components'

export function Carrosel() {
    return (
      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        speed={800}
        
      >
        <SwiperSlide><Banner/></SwiperSlide>
        <SwiperSlide><Banner/></SwiperSlide>
      </Swiper>
    );
}
