import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  display:flex;
  margin-top:30px;
  justify-content:center;
`;

export const PaginationItem = styled.li`
  width: 20px;
  height: 20px;
  display:flex;
  cursor: pointer;
  list-style: none;
  font-weight: bold;
  margin-right: 10px; 
  align-items: center;
  justify-content: center; 
  border: ${props => props.active ? '1px solid' : 'none'}
`;
