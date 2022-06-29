import React from 'react'
import { Cards } from '../Cards';
import { Button } from '../Button'


import { Container } from './styles';

export function Services(){
    return (
        <Container>
            <h1>Serviços Jurídicos</h1>
            <p>Expertise, Intuição, Engenhosidade.</p>
            <Cards/>

        <div>
            <p>Tem interesse em saber mais?</p>

            <Button text='Contato' styles={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '120px',
                    height: '30px',
                    backgroundColor: '#CCC',
                    borderRadius: '20px',
                    padding: '10px',
                    marginTop: '20px',
                    boxShadow: '3px 3px 6px #000',
                }
            }/>
    </div>
        </Container>
        
    );
}
