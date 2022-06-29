import React, { useState } from 'react';
import { Burger } from '../Burger';
import { NavMenu } from './styles';
import { useDevice } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { routesObject } from '../../routes';

export function Nav() {
    const [isOpen, toggle] = useState(false);
    const { device: { isMobile } } = useDevice();
    const { home, agende, sobre } = routesObject;
    const navigate = useNavigate();
    return (
        <NavMenu isMobile={isMobile} isOpen={isOpen}>
            {isMobile &&
                <Burger isOpen={isOpen} toggle={toggle} />
            }
            <ul>
                <li onClick={() => navigate('/'+home)}><a>Home</a></li>
                <li onClick={() => navigate('/'+agende)}><a>Agende Online</a></li>
                <li onClick={() => navigate('/'+sobre)}><a>Sobre</a></li>
            </ul>
        </NavMenu>
    );
}
