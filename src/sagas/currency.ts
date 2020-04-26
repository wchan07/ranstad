import { call, put } from "redux-saga/effects";
import { CurrencySymbol } from "../contracts";
import { setCurrencies } from "../actions/currency";

const CURRENCY_URI =
  "https://gist.githubusercontent.com/mddenton/062fa4caf150bdf845994fc7a3533f74/raw/27beff3509eff0d2690e593336179d4ccda530c2/Common-Currency.json";

export default function* () {
  const response: Response = yield call(window.fetch, CURRENCY_URI, {
    method: "GET",
  });
  const currencyMap: Map<string, CurrencySymbol> = yield call([
    response,
    response.json,
  ]);
  console.log("currency saga", currencyMap);
  yield put(setCurrencies(currencyMap));
}
