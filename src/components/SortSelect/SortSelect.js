import React, {useContext} from 'react';
import {Select} from 'antd';

import {sortOptions} from '../../commonTypes';
import { selectSort } from '../../actions';
import { MainContext } from '../../stores/context';

import { SelectWrapper } from './SortSelect.style';

export const { Option } = Select;

export const SortSelect = () => {

  const { dispatch } = useContext(MainContext);

  const handleChange = (value) => {
    dispatch(selectSort(value));
  };

  const renderOption = sortOptions.map(type => (<Option key={type.key} value={type.value}>{type.label}</Option>));

  return (
    <SelectWrapper>
      <Select onChange={handleChange} placeholder='Order By'>
        {renderOption}
      </Select>
    </SelectWrapper>
  );
};
