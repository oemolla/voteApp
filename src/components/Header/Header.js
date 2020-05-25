import React from 'react';
import {Link} from 'react-router-dom';

import {HeaderTitle,HeaderWrapper,Logo} from './Header.style';

import logo from '../../assets/images/hepsiburada.png';

export const Header = () => {
  return (
      <HeaderWrapper className='header'>
        <Link to='/'>
          <Logo src={logo} alt="hepsiburada" />
        </Link>
        <HeaderTitle>
          <strong>Link</strong>
          VOTE Challenge
        </HeaderTitle>
      </HeaderWrapper>
  );
};
