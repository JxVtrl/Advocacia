import React from 'react'
import { Cards } from '../Cards';

import { Container } from './styles';

export function Services(){
    return (
        <Container>
            <h1>Serviços Jurídicos</h1>
            <p>Expertise, Intuição, Engenhosidade.</p>
            <Cards/>
        </Container>
    );
}
