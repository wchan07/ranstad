import { handleActions } from 'redux-actions';
import { currency } from "../actionTypes";

const { GET_CURRENCY_SYMBOLS } = currency;

export default handleActions(
  {
    [GET_CURRENCY_SYMBOLS]: (state: any, payload: any) => ({ ...state }),
  },
  {}
);
