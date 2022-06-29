import styled from 'styled-components';

export const Container = styled.div`
   background-image: linear-gradient(45deg, #fff, #000);
   width: 100%;
   height: 800px;
   display: flex;
   flex-direction: column;
   align-items: center;

   h1{
      font-family: 'Archivo Black';
      font-size: 32px;
      margin-top: 15px;
      color: #fff;
      text-align: center;
      width: 100%;  
   }

   div{
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 25px;
   }

   div p{
      font-size: 21px !important;
   }

   div h1{
      font-size: 24px;
   }

   p{
      font-size: 20px;
   }

   p:first-of-type{
      font-family: 'Judson';
      margin-top: 25px;
      color: #fff;
      font-size: 30px;
   }
`;

