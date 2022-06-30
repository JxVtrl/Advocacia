import styled from 'styled-components';

export const Container = styled.div`
   background-color: white;
   background-size: cover;
   object-fit: cover;
   width: 100%;
   height: 800px;
   display: flex;
   flex-direction: column;
   align-items: center;

   h1 {
      font-family: 'Sans-serif';
      font-size: 32px;
      margin-top: 15px;
      color: #000;
      text-align: center;
      width: 100%;  
   }

   h2{
      font-size: 35px;
      margin-bottom: 25px;
   }

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 25px;
      margin-bottom: 40px;
   }

   p:first-of-type{
      font-family: 'Judson';
      margin-top: 10px;
      color: #000;
      font-size: 30px;
   }

   .depositions{
      display: flex;
      width: 1000px;
      margin-top: 120px;
   }

   .depositions h2{
      border-bottom: 1px solid #000;
   }

   .depositions p{
      font-family: 'Judson';
      font-size: 25px;
      margin: 15px;
   }

   `;

