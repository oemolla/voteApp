import React, {useContext} from 'react';
import {Modal, message} from 'antd';

import {MainContext} from '../../stores/context';
import {modalReset, removeLink} from '../../actions';


export const AppModal = () => {
  const {dispatch , state : { modal }} = useContext(MainContext);

  const success = (name) => {
    message.success(`${name} removed`);
  };
  const handleOk = () => {
    dispatch(removeLink(modal?.activeItem?.id));
    success(modal?.activeItem?.name);
  };
  const handleCancel = () =>{
    dispatch(modalReset())
  };
  return (
      <Modal
          onOk={handleOk}
          visible={modal?.active}
          destroyOnClose
          onCancel={handleCancel}
      >
        do you want to remove {modal?.activeItem?.name}
      </Modal>
  );
};