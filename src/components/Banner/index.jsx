import React, { useState } from 'react';
import { Button, Carrosel } from "../../components";
import { Container } from './styles';

export function Banner() {
    const [isHover, setIsHover] = useState(false);

    return (
      <Container>
        <Carrosel />
        <h1>
        Izabella Rennó Advocacia
        </h1>
        <Button
          text="Saiba mais"
          setIsHover={setIsHover}
          styles={{
            backgroundColor: isHover ? "#cf1919" : "#b61c1c",
            borderRadius: "10px",
            color: "#fff",
            padding: "8px",
            marginTop: "10px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.3s linear",
            fontWeight: '600'
          }}
        />
      </Container>
    );
}
