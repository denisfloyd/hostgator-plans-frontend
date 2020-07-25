import * as types from './actionTypes';

export function setPlans(products) {
  return async dispatch => {
    dispatch(types.setPlans(products));
  };
}
