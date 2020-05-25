import React from 'react';
import { useHistory } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';

import {SubmitForm} from '../../components';

import {
  LinkTo,
  FormTitle,
  FormContainer
} from './Form.style';

const Form = () => {
  const history = useHistory();
  const routeBack = () => {
    history.goBack();
  };

  return (
      <FormContainer>
        <LinkTo onClick={routeBack}>
          <ArrowLeftOutlined /> Return to List
        </LinkTo>
        <FormTitle>Add New Link</FormTitle>
        <SubmitForm/>
      </FormContainer>
  );
};

export default Form;
