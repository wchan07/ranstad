import { handleActions } from "redux-actions";
import { rates } from "../actionTypes";
import { CurrencyRates } from "../contracts";

const { SET_CONVERSION_RATES } = rates;

export default handleActions<CurrencyRates>(
  {
    [SET_CONVERSION_RATES]: (state: any, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  {}
);
