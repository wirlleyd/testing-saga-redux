import { all } from "redux-saga/effects";
import { IncrementBySaga, DecrementBySaga } from "./saga/app.saga";

export default function* rootSaga() {
  yield all([IncrementBySaga(), DecrementBySaga()]);
}
