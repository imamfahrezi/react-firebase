import {CHANGE_USER} from "../actions/type";

const initialState = {
  user: "imam",
};

export default function(state = initialState, action) {
  const {type, value} = action;
  switch (type) {
    case CHANGE_USER:
      return {
        ...state,
        isLoading: value,
      };
    default:
      return state;
  }
}
