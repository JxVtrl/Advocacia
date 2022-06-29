import React, { useState } from 'react'
import { Cards } from '../Cards';
import { Button } from '../Button'


import { Container } from './styles';

export function Services() {
    const [isHover, setIsHover] = useState(false);
    return (
        <Container>
            <h1>Serviços Jurídicos</h1>
            <p>Expertise, Intuição, Engenhosidade.</p>
            <Cards />
            
            <div>
                <p>Tem interesse em saber mais?</p>
                <Button
                text='Contato'
                setIsHover={setIsHover}
                styles={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '120px',
                        height: '30px',
                        opacity: isHover ? '0.5' : '1',
                        borderRadius: '20px',
                        padding: '10px',
                        marginTop: '20px',
                        boxShadow: '3px 3px 6px #000',
                        cursor: 'pointer',
                        transition: 'all 0.3s linear',
                        color: '#fff'
                    }
                }/>
            </div>
        </Container>
    );
}
