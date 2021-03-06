import firebase from "../../config/firebase";
import {CHANGE_LOADING, CHANGE_ISLOGIN, CHANGE_USER} from "./type";

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

export const loginUserAPI = ({email, password}) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: CHANGE_LOADING,
      value: true,
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("success", res);
        const dataUser = {
          email: res.user.email,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
        };
        dispatch({
          type: CHANGE_LOADING,
          value: false,
        });
        dispatch({
          type: CHANGE_ISLOGIN,
          value: true,
        });
        dispatch({
          type: CHANGE_USER,
          value: dataUser,
        });
        resolve(true);
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
        dispatch({
          type: CHANGE_ISLOGIN,
          value: false,
        });
        reject(false);
      });
  });
};
