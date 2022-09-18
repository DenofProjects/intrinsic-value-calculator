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

// investor code starts here
export function onPasswordInputChange(data: any) {
  return {
    type: intrinsicActionTypes.ON_PASSWORD_INPUT_CHANGE,
    data: data,
  };
}

export function translate() {
  return {
    type: intrinsicActionTypes.TRANSLATE,
  };
}

export function initialInvestorDetails() {
  return {
    type: intrinsicActionTypes.INTIAL_INVESTOR_DETAILS,
  };
}
