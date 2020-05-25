import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {message} from 'antd';

import {MainContext} from '../../stores/context';
import {formSubmit} from '../../actions';

import {
  Input,
  Label,
  Button,
  Form,
  ErrorMessage
} from './SubmitForm.style';
import {urlPattern} from "../../commonTypes";

export const SubmitForm = () => {
  const {register, handleSubmit, reset , errors} = useForm();
  const {dispatch, state: {lastID}} = useContext(MainContext);

  const success = (name) => {
    message.success(`${name} added`);
  };

  useEffect(() => {
    reset();
  }, [lastID]);

  const onSubmit = (data) => {
    const pK = lastID + 1;
    const linkData = {
      ...data,
      id: pK,
      point: 0,
      minusPoint: 0,
      creationDate: pK
    };
    dispatch(formSubmit(linkData));
    //normalde network islemlerinin toplandigi yerde message cagirirdim.
    success(linkData.name);
  };

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Link Name:
          <Input placeholder='e.g. Alphabet' name="name" ref={register({
            required: true
          })}/>
          <ErrorMessage>{errors.name && 'Name is required'}</ErrorMessage>
        </Label>
        <Label>
          Link URL:
          <Input placeholder='e.g. http://abc.xyz' name="url" ref={register({
            required : true,
            pattern : urlPattern
          })}/>
          <ErrorMessage>
            {errors.url && 'URL is not valid'}
          </ErrorMessage>
        </Label>
        <Button type="submit">
          ADD
        </Button>
      </Form>
  );
};
