import SagasActionTypes from "./sagas.types";

const INITIAL_STATE = {
  value: 0
};

const sagasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SagasActionTypes.INCREMENT_VALUE:
      return {
        ...state,
        value: state.value + 1
      };
    case SagasActionTypes.DECREMENT_VALUE:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};

export default sagasReducer;
