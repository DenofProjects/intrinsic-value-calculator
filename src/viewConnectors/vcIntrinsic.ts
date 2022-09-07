import {
  calculateIntrinsicValue,
  onInputChange,
  reset,
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
  };
}
