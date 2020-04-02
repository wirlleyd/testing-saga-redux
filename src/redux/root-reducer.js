import { combineReducers } from "redux";
import sagasReducer from "./sagas.reducer";
const rootReducer = combineReducers({
  sagas: sagasReducer
});

export default rootReducer;
