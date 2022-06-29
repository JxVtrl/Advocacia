import React, { useState, useEffect } from 'react'
import { Map, Load } from '../components'
import { Header, Main, Footer } from '../sections'
import { Container } from './styles'

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1200);
  }, []);

  return (
    <Container>
      {load ? <Load /> : (
        <>
          <Map />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </Container>
  )
}

export default App
