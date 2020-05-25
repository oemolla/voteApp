import React, {useContext, useState , useEffect} from 'react';

import {dynamicSort} from "../../utils";
import {LinkItem} from '../LinkItem/LinkItem';
import {MainContext} from '../../stores/context';

import {LinkListWrapper} from './LinkList.style';

export const LinkList = () => {
  const {state: {links, sorting, pagination}} = useContext(MainContext);
  const [manipulatedList, setManipulatedList] = useState(links);
  useEffect(() => {
    const startIndex = pagination?.current * pagination?.itemsPerPage;
    const endIndex = startIndex + pagination?.itemsPerPage;
    setManipulatedList(links.sort(dynamicSort(sorting?.by)).slice(startIndex, endIndex));
  }, [links, pagination, sorting]);

  const linkItems = manipulatedList.map(linkItem => {
    return (
        <LinkItem key={linkItem?.id} {...linkItem} />
    );
  });

  return (
      <LinkListWrapper>
        {linkItems}
      </LinkListWrapper>
  );
};
