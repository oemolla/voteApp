import React, { useEffect, useReducer } from 'react';

import {storageKey} from '../commonTypes';
import {writeStorageItem} from '../utils';
import {MainContext, initialState} from './context';

import appReducer from '../reducers/appReducer';

function Store({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(()=>{
    const {links , lastID} = state;
    writeStorageItem(storageKey,{links,lastID});
  },[state]);

  const value = { state, dispatch };
  return (
      <MainContext.Provider value={value}>
        {children}
      </MainContext.Provider>
  );
}

export default Store;