import intrinsicActionTypes from "../actionTypes/intrinsicActionTypes";

export function onInputChange(data: any) {
  return {
    type: intrinsicActionTypes.CASH_FLOW_INPUT_CHANGE,
    data: data,
  };
}

export function calculateIntrinsicValue() {
  return {
    type: intrinsicActionTypes.CALCULATE_INTRINSIC_VALUE,
  };
}

export function validateAllFields() {
  return {
    type: intrinsicActionTypes.VALIDATE_FIELDS,
  };
}

export function reset() {
  return {
    type: intrinsicActionTypes.RESET_VALUES,
  };
}
