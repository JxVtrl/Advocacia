import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  
  margin: 20px auto;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  
  div {
    margin: 0 auto;
    background-color: white;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    
    p{
      color: #000;
      text-align: center;
    }

    &:nth-child(1) {
      background-image: url('https://lawvision.com.br/wp-content/uploads/2021/04/advocacia-4-0.jpg');
    }

    &:nth-child(4) {
      background-image: url('https://images.unsplash.com/photo-1607778102165-6a418ee9adf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyaWJ1bmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    }
  }

`