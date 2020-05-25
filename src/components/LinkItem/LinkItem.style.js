import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const LinkWrapper = styled.div`
  display:flex;
  padding: 10px;
  margin-top:10px;
  position:relative;
  
  .remove-button {
    top:-15px;
    right:-5px;
    color: #ea0000;
    font-size: 20px;
    cursor: pointer;
    visibility:hidden;
    position: absolute;
  }
  
  &:hover {
    border-radius:5px;
    border: 1px solid #c7c7c7;
    background-color: #f4f4f4;
    
    .remove-button {
      visibility:visible;
    }
  }
`;

export const LinkPoint = styled.div`
    display: flex;
    font-size: 15px;
    min-width: 80px;
    min-height: 80px;
    align-items:center;
    border-radius: 5px;
    margin-right: 40px;
    flex-direction: column;
    border: 2px solid #c7c7c7;
    background-color: #f4f4f4;
    
    span{
      &:nth-child(1){
        font-size:40px;
        font-weight:600;
      }
    }
`;

export const LinkArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LinkTitle = styled.div`
    font-weight; 600;
    margin-bottom:5px;
`;

export const Url = styled(Link)`
  color:#b1afaf;
`;

export const VoteArea = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const IconWrapper = styled.span`
  color:#b1afaf;
  cursor:pointer;
  font-weight: 600;
  span{
    padding-right:5px;
  }
`;
