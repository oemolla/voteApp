import styled from 'styled-components';

export const SelectWrapper = styled.div`
  flex:1;
  display:flex;
  margin-top: 20px;
  padding: 20px 0 20px 10px;
  border-top: 2px solid #c7c7c7;
  
  .ant-select{
    width: 200px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
    background-color: #f4f4f4; 
    
    .ant-select-selector.ant-select-selector{
     border:none;
     box-shadow:none; 
     border-color:#f4f4f4;
     background-color: #f4f4f4; 
    }
  }
`;
