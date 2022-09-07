import { Reducer } from "redux";
import intrinsicActionTypes from "../actionTypes/intrinsicActionTypes";
import { intrinsicDTO } from "../DTOs/intrinsicDTO";

const initialState: intrinsicDTO = {
  count: 0,
};

const intrinsicReducer: Reducer<intrinsicDTO> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case intrinsicActionTypes.INCRIMENT: {
      newState.count++;
      return newState;
    }

    case intrinsicActionTypes.DECRIMENT: {
      newState.count--;
      return newState;
    }

    default: {
      return newState;
    }
  }
};

export default intrinsicReducer;
