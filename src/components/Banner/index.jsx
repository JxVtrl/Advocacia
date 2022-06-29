import React, { useState } from 'react';
import { Button } from "../../components";
import { Container } from './styles';

export function Banner({img, num, text, btnTxt, name}) {
  const [isHover, setIsHover] = useState(false);
  
  function setColor(num, isHover) {
    switch (num) {
      case 1:
        return isHover ? '#bd1515' : '#b61c1c';
      case 2:
        return isHover ? '#555' : '#333';
      case 3:
        return isHover ? '#555' : '#333';
      default:
        return '#000';
    }

  }

    return (
      <Container img={img} num={num}>
        <h1>
          {text}
        </h1>
        <address>{name}</address>
        <Button
          text={btnTxt}
          setIsHover={setIsHover}
          styles={{
            backgroundColor: setColor(num, isHover),
            borderRadius: "10px",
            color: "#fff",
            padding: "8px",
            marginTop: "10px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.3s linear",
            fontWeight: '600',
            opacity: isHover? '0.6' : '1',
        }}
        />
      </Container>
    );
}
