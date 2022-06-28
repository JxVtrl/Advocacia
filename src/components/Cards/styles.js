import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 10px;
  display: flex;
  gap: 10px;
`;


export const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  border: 1px solid #000;
  overflow: hidden;
  margin: 0 8px;
  box-shadow: 3px 3px 7px #CCC;

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
    margin-top: 5px;
    font-size: 20px;
    font-weight: 400;
  }

  p:nth-child(4){
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin: 20px 20px;
  }

  p:nth-child(5){
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    margin: 20px 20px;
  }
`;