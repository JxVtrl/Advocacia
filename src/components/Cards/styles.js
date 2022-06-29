import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 20px auto;
  
  display:flex;
  flex-direction: row;
  
  div {
    display:flex;
    flex-direction: column;
    
    padding: 0 50px;
    background-color: white;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

    h1{
      color: #000;
    }
    
    p{
      color: #000 !important;
      width: 100%;
      max-width: 1000px;
      font-size: 22px !important;
      text-align: justify;
      padding: 5px;
    }

    /* &:nth-child(1) {
      background-image: url('https://lawvision.com.br/wp-content/uploads/2021/04/advocacia-4-0.jpg');
    } */

    &:nth-child(4) {
      background-image: url('https://images.unsplash.com/photo-1607778102165-6a418ee9adf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyaWJ1bmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    }

    @media (max-width: 460px){
p{
   font-size: 16px !important;
   max-width: 250px;
   text-align: left;
}
  }

`