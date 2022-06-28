import React from 'react';
import { Products, Carrosel, Services } from '../../components';

import { Container } from './styles';

export function Main() {

  return (
    <Container>
      <Carrosel />
      <Products />
      <Services />
    </Container>
  )
}
