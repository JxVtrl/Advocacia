import React, { useState } from 'react'
import { Cards } from '../Cards';
import { Button } from '../Button'
import { Insta } from '../../components/Insta/index'

import { Container } from './styles';

export function Services() {
    const [isHover, setIsHover] = useState(false);
    return (
        <Container>
            <h2>Expertise, Intuição, Engenhosidade.</h2>
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
                        height: '35px',
                        borderRadius: '20px',
                        transform: isHover ? 'scale(1.1)' : 'scale(1.0)',
                        marginTop: '20px',
                        boxShadow: '3px 3px 6px #000',
                        cursor: 'pointer',
                        transition: 'all 0.3s linear',
                        color: '#fff',
                        backgroundColor: '#000',
                    }
                }/>
                <div className='depositions'>
                    <h2>Cliente do(a) Izabella Rennó Advocacia</h2>
                    <p className='sucessJudges'>Sucesso jurídico</p>
                    <p>Esté é um espaço para depoimentos. Use-o para compartilhar avaliações sobre seus serviços ou seu 
                        negócio. Faça seus visitantes tomarem a iniciativa de entrarem em contato com você!
                    </p>
                </div>
                <div>
                    <Insta/>
                </div>
            </div>
        </Container>
    );
}
