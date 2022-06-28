import React from 'react';
import { Button, Cards, Carrosel } from '../../components';

import { Container } from './styles';

export function Main() {

  return (
    <Container>
      <Carrosel />
      <Cards />
      <Button
          styles={{
            width: '200px',
            position: 'fixed',
            borderRadius: '100px',
            boxShadow: '2px 2px 5px #000',
            backgroundColor: '#555',
            opacity: '1',
            cursor: 'pointer',
            right: '0',
            bottom: '0',
            margin: '20px',
            padding: '4px 5px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600'
          }}
          text="Vamos conversar por chat!"
      />
  </Container>
  )
}
