import React, {useContext} from 'react';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MinusCircleFilled
} from '@ant-design/icons';

import {MainContext} from '../../stores/context';
import {downVote, upVote, modalOpen} from '../../actions';

import {
  LinkWrapper,
  VoteArea,
  IconWrapper,
  LinkArea,
  LinkPoint,
  LinkTitle,
  Url
} from './LinkItem.style';

export const LinkItem = ({id, name, url, point}) => {
  const {dispatch} = useContext(MainContext);

  const openModal = () =>{
    dispatch(modalOpen({active: true, activeItem: {id, name}}));
  };

  const increasePoint = () =>{
    dispatch(upVote(id));
  };

  const decreasePoint = () =>{
    dispatch(downVote(id));
  };

  const openNewTab = (url) => {
    window.open(url);
  };

  return (
      <LinkWrapper>
        <div
            className='remove-button'
            onClick={openModal}>
          <MinusCircleFilled/>
        </div>
        <LinkPoint>
          <span>{point}</span>
          <span>POINTS</span>
        </LinkPoint>
        <LinkArea>
          <div className='link-info'>
            <LinkTitle>
              {name}
            </LinkTitle>
            <Url to='/' onClick={() => openNewTab(url)}>
              ({url})
            </Url>
          </div>
          <VoteArea>
            <IconWrapper onClick={increasePoint}>
              <ArrowUpOutlined/>
              Up Vote
            </IconWrapper>
            <IconWrapper onClick={decreasePoint}>
              <ArrowDownOutlined/> Down Vote
            </IconWrapper>
          </VoteArea>
        </LinkArea>
      </LinkWrapper>
  );
};
