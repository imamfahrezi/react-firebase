import {CHANGE_LOADING} from "../actions/type";

const initialState = [
  {
    isLoading: false,
  },
];

export default (state = initialState, action) => {
  const {type, value} = action;
  switch (type) {
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: value,
      };
    default:
      return state;
  }
};
