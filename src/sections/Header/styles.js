import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 70px;
  max-width: 95vw;

  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: 'Archivo Black';
    a {
      text-decoration: none;
      color: #000;
      font-weight: 200;

      &:visited {
        color: #000;
      }
    }
  }
`;