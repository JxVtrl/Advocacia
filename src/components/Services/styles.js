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
   `;

