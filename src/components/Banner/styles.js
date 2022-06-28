import styled from 'styled-components';

export const Container = styled.div`
  background-image: url("https://ferreirasalles.com.br/images/banner.jpg");
  background-size: cover;
  background-position: 0 -200px;
  background-repeat: no-repeat;
  image-resolution: from-image;

  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 1255px) {
    background-position: center;

  }

  h1 {
    color: #fff;
  }
`;
