import React, { useState } from 'react'
import { Map } from '../components'
import { Header, Main, Footer } from '../sections'
import { Container } from './styles'

function App() {
  return (
    <Container>
      <Map/>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default App
