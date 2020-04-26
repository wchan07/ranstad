import { createAction } from "redux-actions";
import { SET_CURRENCY_SYMBOLS } from "../actionTypes/currency";
import { CurrencySymbol } from "../contracts";

export const setCurrencies = createAction<Map<string, CurrencySymbol>>(
  SET_CURRENCY_SYMBOLS
);
