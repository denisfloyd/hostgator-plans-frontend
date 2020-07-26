import * as types from './actionTypes';

export function doNothing() {
  return null;
}

export function setPlans(plans) {
  return async dispatch => {
    dispatch(types.setPlans(plans));
  };
}
