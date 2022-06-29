import React from 'react'

import { Container } from './styles'

export function Cards(){

    return(
        <Container>


            <div>
                <h1>Sessão de Introdução</h1>
                
                <p>
                    Ao longo dos anos, nossa equipe adquiriu a experiência e os conhecimentos necessários para tornar esse processo o mais simples
                    possível. Vamos estabelecer objetivos e alinhar expectativas. Se tiver dúvidas, basta entrar em contato conosco.                
                </p>
            </div>

            <div>
                    <h1>Consultoria rápida</h1>
                    <p>Decisões jurídicas podem ser difíceis e complicadas, por isso é importante ter uma abordagem fundamentada em informações
                        corretas. Ao contratar nossos serviços, você pode ter a certeza de que estaremos à sua disposição em todas as etapas do processo.
                    </p>
            </div>  
       
        </Container>
    );
}


