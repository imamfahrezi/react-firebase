import firebase from "../../config/firebase";
import {CHANGE_LOADING} from "./type";

export const registerUserAPI = ({email, password}) => dispatch => {
  dispatch({
    type: CHANGE_LOADING,
    value: true,
  });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log("success", res);
      dispatch({
        type: CHANGE_LOADING,
        value: false,
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({
        type: CHANGE_LOADING,
        value: false,
      });
    });
};
