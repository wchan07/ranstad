import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import * as reducers from "../reducers";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers(<any>{
    ...reducers,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
