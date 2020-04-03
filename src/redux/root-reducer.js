import { combineReducers } from "redux";
import sagasReducer from "./saga/sagas.reducer";
const rootReducer = combineReducers({
  sagas: sagasReducer
});

export default rootReducer;
