import React, { useState } from "react";
import { Button } from '../../components'
import { Currency, Timestamp } from '../../helpers'
import { Container, CardContainer } from './styles';

export function Cards() {
  return (
    <Container>
      <Card
        img="https://img.migalhas.com.br/gf_base/empresas/MIGA/imagens/D5A194229EE4850434ADE9F89C58CF293EBD_advogado.jpg"
        text="Sessão de Introdução"
        valor={500}
        time={60}
      />
      <Card
        img="https://wp.ebradi.com.br/wp-content/uploads/2021/08/ebradi_ebradi_image_490-1080x675.jpeg"
        text="Consultoria rápida"
        valor={1000}
        time={120}
      />
    </Container>
  );
}

export function Card({ img, text, valor, time }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardContainer>
      <img src={img} alt="#" />
      <p>{text}</p>
      <hr />
      <p>{Timestamp(time)}</p>
      <p>{Currency(valor)}</p>
      <Button
        setIsHover={setIsHover}
        styles={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "120px",
          height: "35px",
          padding: "12px 4px",
          boxShadow: "2px 2px 5px #000",
          backgroundColor: isHover ? "#333" : "#555",
          transition: 'all 0.3s ease-in-out',
          cursor: "pointer",
          color: "#fff",
          overflow: "hidden",
          fontWeight: "bold",
          borderRadius: "20px",
          fontSize: "13px",
        }}
        text="Agendar agora"
      />
    </CardContainer>
  );
}