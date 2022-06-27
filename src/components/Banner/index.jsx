import React, { useState } from 'react';
import { Button } from '../../components';
import { Container } from './styles';

export function Banner() {
    const [isHover, setIsHover] = useState(false);

    return (
      <Container>
        <h1>
          Bem vindo ao <strong>Github Finder</strong>
        </h1>
        <Button
          text="Saiba mais"
          setIsHover={setIsHover}
          styles={{
            backgroundColor: isHover ? "#999" : "#666",
            borderRadius: "10px",
            color: "#fff",
            padding: "8px",
            marginTop: "10px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.8s linear",
          }}
        />
      </Container>
    );
}
