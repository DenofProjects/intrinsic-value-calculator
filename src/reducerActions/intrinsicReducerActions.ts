import intrinsicActionTypes from "../actionTypes/intrinsicActionTypes";

export function incriment() {
  return {
    type: intrinsicActionTypes.INCRIMENT,
  };
}

export function decriment() {
  return {
    type: intrinsicActionTypes.DECRIMENT,
  };
}
