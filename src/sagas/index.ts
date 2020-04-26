import { all, call } from "redux-saga/effects";
import currencySaga from "./currency";
import ratesSaga from "./rates";

export default function* () {
  yield all([currencySaga, ratesSaga].map(call));
}
