export const SETTING_PLANS = 'SETTING_PLANS';

export const setPlans = plans => ({
  type: SETTING_PLANS,
  payload: { plans }
});
