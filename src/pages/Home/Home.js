import React from 'react';

import {
  LinkList,
  AppModal,
  FormLink,
  SortSelect,
  Pagination
} from '../../components';

import { HomeContainer } from './Home.style';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <FormLink/>
        <SortSelect/>
        <LinkList />
        <AppModal/>
        <Pagination/>
      </HomeContainer>
    </>
  );
};

export default Home;
