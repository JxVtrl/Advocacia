import React, { useState } from 'react';
import { Button } from "../../components";
import { Container } from './styles';

export function Banner({img}) {
    const [isHover, setIsHover] = useState(false);

    return (
      <Container img={img}>
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
