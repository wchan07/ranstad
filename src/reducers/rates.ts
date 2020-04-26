import { handleActions } from 'redux-actions';
import { rates } from "../actionTypes";

const {GET_CONVERSION_RATES  } = rates;

export default handleActions(
  {
    [GET_CONVERSION_RATES]: (state: any, payload: any) => ({ ...state }),
  },
  {}
);
