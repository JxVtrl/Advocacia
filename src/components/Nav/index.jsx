import React from 'react';

import { NavMenu } from './styles';

export function Nav() {
    return (
        <NavMenu>
            <ul>
                <li><a>Home</a></li>
                <li><a>Agende Online</a></li>
                <li><a>Sobre</a></li>
                <li><a>Entre em contato</a></li>
                <li><a>Novidades e atualizações</a></li>
                <li><a>Mais</a></li>
            </ul>
        </NavMenu>
    );
}
