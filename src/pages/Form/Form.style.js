import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 40%;
  margin: 30px auto;
   @media (max-width:992px){
    width: 95%;
  }
`;

export const FormTitle = styled.h1`
    margin: 30px 0;
`;

export const LinkTo = styled.div`
  color: #000000;
  cursor:pointer;
  margin-top: 30px;
  text-decoration: none;
  
  &:hover{
    color: #000000;
  }
`;
