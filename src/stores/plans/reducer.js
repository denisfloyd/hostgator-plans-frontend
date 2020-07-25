import * as types from './actionTypes';

export const initialState = {
  allPlans: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SETTING_PLANS:
      return {
        ...state,
        allPlans: action.payload.plans
      };

    default:
      return {
        ...state
      };
  }
};
