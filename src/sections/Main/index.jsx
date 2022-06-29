import React, { useEffect, useState } from 'react';
import { Products, Carrosel, Services, Load } from '../../components';

import { Container } from './styles';

export function Main() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <Container>
      {load ? <Load /> : (
        <>
          <Carrosel />
          <Products />
          <Services />
        </>
      )}
    </Container>
  )
}
