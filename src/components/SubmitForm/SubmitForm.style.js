import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 40%;
  margin: 30px auto;
`;

export const FormTitle = styled.h1`
    margin: 30px 0;
`;

export const LinkTo = styled.div`
  color: #000000;
  cursor:pointer;
  margin-top: 30px;
  text-decoration: none;
`;

export const Form = styled.form`
  display:flex;
  flex-direction:column;
`;

export const Label = styled.label`
  display: flex;
  margin-top: 10px;
  flex-direction:column;
`;

export const Input = styled.input`
  flex: 1;
  display: flex;
  font-size:14px;
  margin-top: 10px;
  padding: 15px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  width:90px;
  color: #fff;
  border:none;
  outline:none;
  cursor:pointer;
  font-weight: 600;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 50px;
  align-self: flex-end;
  background-color: #000;
`;

export const ErrorMessage = styled.div`
  color : red;
  margin: 10px 0;
`;
