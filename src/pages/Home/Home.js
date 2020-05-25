import React from 'react';
import {PlusOutlined} from '@ant-design/icons';

import { LinkList , SortSelect , AppModal ,Pagination} from '../../components';

import { HomeContainer,LinkTo,PlusIcon } from './Home.style';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <LinkTo to='/submit-form'>
          <PlusIcon className='plus-icon'>
            <PlusOutlined />
          </PlusIcon>submit a link
        </LinkTo>
        <SortSelect/>
        <LinkList />
        <AppModal/>
        <Pagination/>
      </HomeContainer>
    </>
  );
};

export default Home;
