import SagasActionTypes from "./sagas.types";

export const Increment = () => ({
  type: SagasActionTypes.INCREMENT_VALUE
});
export const Decrement = () => ({
  type: SagasActionTypes.DECREMENT_VALUE
});
