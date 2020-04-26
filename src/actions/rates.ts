import { createAction } from "redux-actions";
import {
  GET_CONVERSION_RATES,
  SET_CONVERSION_RATES,
} from "../actionTypes/rates";

export const getConversionRate = createAction<string>(GET_CONVERSION_RATES);
export const setConversionRate = createAction(
  SET_CONVERSION_RATES
);
