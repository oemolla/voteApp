import {createContext} from 'react';
import {readStorageItem} from '../utils';
import {sortType, storageKey} from '../commonTypes';

export const initialData = {
  links : [],
  lastID : 0,
  sorting: {
    by : sortType.creationDate
  },
  modal : {
    active: false,
    activeItem:{}
  },
  pagination: {
    total : 0,
    current: 0,
    itemsPerPage:5
  }
};
const siteData = readStorageItem(storageKey);
export const initialState = {...initialData,...siteData};
export const MainContext = createContext(initialState);