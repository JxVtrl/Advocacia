import React, { useState } from "react";
import { Button } from '../../components'
import { Currency, Timestamp } from '../../helpers'
import { useDevice } from "../../hooks";
import { ProductContainer } from './styles';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';

export function Products() {
  const { device: { isMobile } } = useDevice();

  return (
    <Swiper
      modules={[ Autoplay ]}
      slidesPerView={isMobile ? 1 : 3}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      speed={800}
      style={{
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '40px auto'
      }}
    >
      <SwiperSlide>
        <Product
          img="https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/D5A194229EE4850434ADE9F89C58CF293EBD_advogado.jpg"
          text="Sessão de Introdução"
          valor={1500}
          time={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
          img="https://wp.ebradi.com.br/wp-content/uploads/2021/08/ebradi_ebradi_image_490-1080x675.jpeg"
          text="Consultoria rápida"
          valor={2000}
          time={120}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Product
        img="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        text="Consultoria longa"
        valor={4000}
        time={180}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export function Product({ img, text, valor, time }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <ProductContainer>
      <div>
        <img src={img} alt="#" />
        <p>{text}</p>
        <hr />
        <p>{Timestamp(time)}</p>
        <p>{Currency(valor)}</p>
      </div>
      <Button
        setIsHover={setIsHover}
        styles={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "120px",
          height: "35px",
          flexShrink: 0,
          padding: "12px 4px",
          boxShadow: "2px 2px 5px #000",
          backgroundColor: isHover ? "#555" : "#333",
          transition: 'all 0.3s ease-in-out',
          cursor: "pointer",
          color: "#fff",
          overflow: "hidden",
          fontWeight: "bold",
          borderRadius: "20px",
          fontSize: "14px",
          fontFamily: "Achivo Black",
        }}
        text="Agendar agora"
      />
    </ProductContainer>
  );
}
