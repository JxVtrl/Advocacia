import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  

  ul{
    display: flex;
    list-style: none;
    gap: 10px;
  }
  
  li {
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 4px 6px;
    border-radius: 8px;

    &:hover{
      background-color: #CCC;
    }
  }
`;
