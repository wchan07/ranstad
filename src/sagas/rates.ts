import { GET_CONVERSION_RATES } from "../actionTypes/rates";
import { Action } from "redux-actions";
import { takeEvery, call, put } from "redux-saga/effects";
import { RatesResponse } from "../contracts";
import { setConversionRate } from "../actions/rates";

const URI_BASE = "https://api.exchangeratesapi.io/latest?base=";

export default function* () {
  yield takeEvery(GET_CONVERSION_RATES, updateRates);
}

function* updateRates({ payload: baseCurrency }: Action<string>) {
  try {
    const response: Response = yield call(
      window.fetch,
      `${URI_BASE}${baseCurrency}`
    );
    const { status } = response;
    if (status >= 200 && status < 300) {
      const ratesResponse: RatesResponse = yield call([
        response,
        response.json,
      ]);
      const { base, rates } = ratesResponse;
      yield put(setConversionRate({ [base]: rates }));
    } else {
      yield put(setConversionRate({ [baseCurrency]: null }));
    }
  } catch {
    yield put(setConversionRate({ [baseCurrency]: null }));
  }
}
