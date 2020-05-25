import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 30%;
  margin: 30px auto;
  
  @media (max-width:992px){
    width: 95%;
  }
`;

export const LinkTo = styled(Link)`
  padding: 10px;
  display: flex;
  font-size:30px;
  color: #000000;
  font-weight:bold;  
  margin-top: 30px;
  border-radius: 5px;
  align-items: center;
  text-decoration:none;
  text-transform: uppercase;
  border: 1px solid #c7c7c7;
  background-color: #f4f4f4;
  
  &:hover{
    color: #000000;
  }
`;

export const PlusIcon = styled.span`
  width: 80px;
  height: 80px;
  display: flex;
  font-size:50px;
  border-radius: 5px;
  margin-right: 40px;
  align-items:center;
  justify-content:center;
  border: 2px solid #c7c7c7;
`;