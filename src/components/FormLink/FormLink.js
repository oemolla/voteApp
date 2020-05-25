import React from 'react';
import {PlusOutlined} from '@ant-design/icons';

import {LinkTo, PlusIcon} from './FormLink.style';

export const FormLink = () => {
  return (
      <LinkTo to='/submit-form'>
        <PlusIcon className='plus-icon'>
          <PlusOutlined />
        </PlusIcon>submit a link
      </LinkTo>
  );
};
