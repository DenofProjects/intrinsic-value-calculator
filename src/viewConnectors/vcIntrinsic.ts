import { decriment, incriment } from "../reducerActions/intrinsicReducerActions";

export const mapStateToProps = (state: any) => {
  return { dopState: state.denOfProjectsReducerState };
};

export function mapDispatchToProps(dispatch: any) {
  return {
    onDecrimentClick: () => {
      dispatch(decriment());
    },

    onIncrimentClick: ()=> {
        dispatch(incriment());
    }
  };
}
