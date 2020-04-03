import SagasActionTypes from "./sagas.types";
import { takeEvery } from "redux-saga/effects";

function* onAction() {
  yield alert("Saga working...");
}
export function* IncrementBySaga() {
  yield takeEvery(SagasActionTypes.INCREMENT_VALUE, onAction);
}
export function* DecrementBySaga() {
  yield takeEvery(SagasActionTypes.DECREMENT_VALUE, onAction);
}
