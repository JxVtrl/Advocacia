import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.img});

  background-size: cover;
  background-position: 0 -200px;
  background-repeat: no-repeat;
  image-resolution: from-image;

  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;

  @media (max-width: 1255px) {
    background-position: center;

  }

  h1 {
    color: ${props => props.num === 3 ? '#000' : '#fff'};
  }

  address{
    color: ${props => props.num === 3 ? '#000' : '#fff'};
  }
`;
