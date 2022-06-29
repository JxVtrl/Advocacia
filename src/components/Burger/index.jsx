import React, { useState } from "react";
import { Container } from "./styles";
import { useSpring, animated } from "react-spring";

export const Burger = ({ isOpen, toggle }) => {

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  });

  return (
    <Container>
      <svg
        onClick={() => toggle(!isOpen)}
        width="100%"
        height="100%"
        viewBox="0 0 44 44"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </Container>
  );
};
