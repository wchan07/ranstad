import { handleActions, Action } from "redux-actions";
import { currency } from "../actionTypes";
import { CurrencySymbol, Dictionary } from "../contracts";

const { SET_CURRENCY_SYMBOLS: GET_CURRENCY_SYMBOLS } = currency;

export default handleActions<Dictionary<CurrencySymbol>>(
  {
    [GET_CURRENCY_SYMBOLS]: (
      prevState ,
      { payload }
    ) => ({
      ...prevState,
      ...payload,
    }),
  },
  {}
);
