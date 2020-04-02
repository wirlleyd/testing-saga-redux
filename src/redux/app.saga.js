import SagasActionTypes from "./sagas.types";
import { takeEvery } from "redux-saga/effects";

function* onIncrement() {
  yield alert("Saga working...");
}

export function* IncrementBySaga() {
  yield takeEvery(SagasActionTypes.INCREMENT_VALUE, onIncrement);
}
