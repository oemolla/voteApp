import {sortType} from "../commonTypes";
import {ActionTypes} from '../actionTypes';
import {initialData} from '../stores/context';

export default function appReducer(state = initialData, action) {

  const {links, lastID, pagination ,sorting} = state;
  const currentLink = links.find(item => item.id === action.payload);
  const restOfItem = links.filter(item => item.id !== action.payload);

  const result = action.payload;
  switch (action.type) {
    case ActionTypes.UP_VOTE:
      currentLink.point = currentLink.point + 1;
      currentLink.minusPoint = -currentLink.point;
      return {
        ...state,
        links: [currentLink, ...restOfItem],
        sorting: {
          by: sorting.by !== initialData.sorting.by ? sorting.by : sortType.point
        }
      };
    case ActionTypes.DOWN_VOTE:
      currentLink.point =  currentLink.point - 1 ;
      currentLink.minusPoint = -currentLink.point;
      return {
        ...state,
        links: [currentLink, ...restOfItem],
        sorting: {
          by: sorting.by !== initialData.sorting.by ? sorting.by : sortType.point
        }
      };
    case ActionTypes.REMOVE_LINK:
      return {...state, modal: {...initialData.modal}, links: [...restOfItem]};
    case ActionTypes.MODAL_OPEN:
      return {...state, links: [...links], modal: result};
    case ActionTypes.MODAL_RESET:
      return {...state, modal: {...initialData.modal}};
    case ActionTypes.FORM_SUBMIT:
      return {
        ...state,
        links: [...links, result],
        lastID: result.id,
        pagination: {...pagination, total: links.length}
      };
    case ActionTypes.SELECT_SORT:
      return {
        ...state,
        sorting: {
          by: result
        }
      };
    case ActionTypes.PAGINATION_SET:
      return {...state, pagination: {...pagination, current: action.payload}};
    case ActionTypes.CLEAR_STATE:
      return {...initialData, links: [...links], lastID, pagination};
    default:
      return state;
  }
}