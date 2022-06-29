import React, { useState } from 'react';
import { Burger } from '../Burger';
import { NavMenu } from './styles';
import { useDevice } from '../../hooks';

export function Nav() {
    const [isOpen, toggle] = useState(false);
    const { device: { isMobile } } = useDevice();
    return (
        <NavMenu isMobile={isMobile} isOpen={isOpen}>
            {isMobile &&
                <Burger isOpen={isOpen} toggle={toggle} />
            }
            <ul>
                <li><a>Home</a></li>
                <li><a>Agende Online</a></li>
                <li><a>Sobre</a></li>
            </ul>
        </NavMenu>
    );
}
