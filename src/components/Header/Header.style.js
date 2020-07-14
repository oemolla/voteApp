import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display:flex;
  margin-top:20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
  
  img {
    width:150px;
  }
`;

export const HeaderTitle = styled.h2`
    font-weight:normal;
`;

export const Logo = styled.img`
    width: 50%;
`;
