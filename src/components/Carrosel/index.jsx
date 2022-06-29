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
          <Banner
            name= 'Barão de Montesquieu'
            img='https://goianiaadvogado.com.br/wp-content/uploads/2019/03/banner-advogado-goiania.jpg'
            num={2}
            text='Liberdade é o direito de fazer tudo o que as leis permitem.'
            btnTxt='Saiba mais'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Banner
            name='Johann Goethe'
            img='https://ferreirasalles.com.br/images/banner.jpg'
            num={1}
            text='Se fosse necessário estudar todas as leis, não teríamos tempo para as transgredir.'
            btnTxt='Saiba mais'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Banner
            name='Lao-Tsé'
            img='https://nardiadvocacia.com.br/wp-content/uploads/2020/04/bg-banner-cristiane-nardi-advocacia-03.jpg'
            num={3}
            text='Quanto maior o número de leis, tanto maior o número de ladrões.'
            btnTxt='Saiba mais'
          />
        </SwiperSlide>
      </Swiper>
    );
}
