import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Judson', serif;
  font-size: 18px;
  position: relative;

  ul {
    display: flex;
    opacity: ${props => props.isMobile ? props.isOpen ? 1 : 0 : 1};
    transition: opacity 0.3s ease-in-out;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    position: ${props => props.isMobile ? 'absolute' : 'relative'};
    top: ${props => props.isMobile ? '70px' : 'unset'};
    right: ${props => props.isMobile ? '0' : 'unset'};
    z-index: 10;
    list-style: none;
    gap: ${props => props.isMobile ? '0' : '10px'};
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
  }

  li {
    height: 100%;
    user-select: none;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: ${props => props.isMobile ? '0' : '8px'};

    &:hover {
      background-color: #ccc;
    }
  }

  
`;
