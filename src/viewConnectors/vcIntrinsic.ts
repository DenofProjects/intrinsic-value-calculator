import {
  calculateIntrinsicValue,
  initialInvestorDetails,
  onInputChange,
  onPasswordInputChange,
  reset,
  translate,
  validateAllFields,
} from "../reducerActions/intrinsicReducerActions";

export const mapStateToProps = (state: any) => {
  return { intrinsicState: state.intrinsicReducerState };
};

export function mapDispatchToProps(dispatch: any) {
  return {
    onInputChange: (e: any) => {
      dispatch(onInputChange(e.target));
    },

    calculateIntrinsicValue: () => {
      dispatch(validateAllFields());
      dispatch(calculateIntrinsicValue());
    },

    reset: () => {
      dispatch(reset());
    },

    // investor code
    passwordInputChange: (e: any) => {
      dispatch(onPasswordInputChange(e.target));
    },

    translate: () => {
      dispatch(translate());
    },

    initialInvestorDetails: () => {
      dispatch(initialInvestorDetails());
    },
  };
}
