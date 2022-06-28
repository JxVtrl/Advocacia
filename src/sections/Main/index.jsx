import React from 'react';
import { Products, Carrosel, Services, Contact } from '../../components';

import { Container } from './styles';

export function Main() {

  return (
    <Container>
      <Carrosel />
      <Products />
      <Services />
      <Contact />
    </Container>
  )
}
