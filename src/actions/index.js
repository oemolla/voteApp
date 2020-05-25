import { ActionTypes } from '../actionTypes';

export const upVote = (payload) => ({
  type: ActionTypes.UP_VOTE,
  payload: payload
});

export const downVote = (payload) => ({
  type: ActionTypes.DOWN_VOTE,
  payload: payload
});

export const removeLink = (payload) => ({
  type: ActionTypes.REMOVE_LINK,
  payload: payload
});

export const modalOpen = (payload) => ({
  type: ActionTypes.MODAL_OPEN,
  payload: payload
});

export const modalReset = () => ({
  type: ActionTypes.MODAL_RESET
});

export const formSubmit = (payload) => ({
  type: ActionTypes.FORM_SUBMIT,
  payload: payload
});

export const selectSort = (payload) => ({
  type: ActionTypes.SELECT_SORT,
  payload: payload
});

export const setPagination = (payload) => ({
  type: ActionTypes.PAGINATION_SET,
  payload: payload
});

export const clearState = (payload) => ({
  type: ActionTypes.CLEAR_STATE,
  payload: payload
});
