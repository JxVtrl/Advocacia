import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #000;
  overflow: hidden;
  margin: 0 8px;
  box-shadow: 3px 3px 7px #CCC;
  align-self: center;
  margin: 10px auto;
  padding-bottom: 30px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  div {
    height: 320px;
  }

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 50%;
  }

  hr {
    margin: 10px auto;
    width: 80%;
    height: 2px;
    background-color: #000;
  }

  p {
    font-size: 18px;
    text-align: left;
    margin: 20px 20px;
  }
  
  p:first-of-type {
    font-family: 'Archivo Black';
    text-align: center;
    margin: 10px 0 0;
    font-size: 20px;
  }

  p:nth-child(4){
    font-weight: 500;
  }

  p:nth-child(5){   
    font-weight: 600;
  }
`;