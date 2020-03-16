import {CHANGE_LOADING, CHANGE_ISLOGIN, CHANGE_USER} from "../actions/type";

const initialState = {
  isLoading: false,
  isLogin: false,
  user: {},
};

export default (state = initialState, action) => {
  const {type, value} = action;
  switch (type) {
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: value,
      };
    case CHANGE_USER:
      return {
        ...state,
        user: value,
      };
    case CHANGE_ISLOGIN:
      return {
        ...state,
        isLogin: value,
      };
    default:
      return state;
  }
};
