import React, {useContext, useEffect, useState} from 'react';
import {LeftOutlined , RightOutlined} from '@ant-design/icons';

import {setPagination} from '../../actions';
import {MainContext} from '../../stores/context';

import {PaginationItem, PaginationWrapper} from './Pagination.style';

export const Pagination = () => {
  const {dispatch, state: {links}} = useContext(MainContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [pager, createPager] = useState([]);

  const maxPage = Math.ceil(links.length / 5);

  useEffect(() =>{
    let totalPage=[];
    for (let i = 1; i <= maxPage; i++) {
      totalPage.push(i);
    }
    createPager(totalPage);
  },[maxPage]);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage -1));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
  };

  const jump = (page) => {
    const pageNumber = Math.max(0, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  const sendCurrentPage = (currentPage) => {
    dispatch(setPagination(currentPage));
  };

  useEffect(() => {
    sendCurrentPage(currentPage);
  }, [currentPage]);

  const renderPaginationItem = pager.map((item, index) => {
    return <PaginationItem active={currentPage === index} key={item}
                           onClick={() => jump(index)}>{item}</PaginationItem>;
  });

  const renderPagination = maxPage > 1 && <PaginationWrapper>
    <PaginationItem onClick={() => prev()}>
      <LeftOutlined/>
    </PaginationItem>
    {renderPaginationItem}
    <PaginationItem onClick={() => next()}>
      <RightOutlined/>
    </PaginationItem>
  </PaginationWrapper>;

  return (
      renderPagination
  );
};