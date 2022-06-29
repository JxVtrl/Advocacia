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
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={800}
        
      >
        <SwiperSlide>
          <Banner img='https://ferreirasalles.com.br/images/banner.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img='https://goianiaadvogado.com.br/wp-content/uploads/2019/03/banner-advogado-goiania.jpg'/>
          </SwiperSlide>
          <SwiperSlide>
            <Banner img='https://drsp.adv.br/wp-content/uploads/2021/01/banner-header-12.png'/>
          </SwiperSlide>
      </Swiper>
    );
}
