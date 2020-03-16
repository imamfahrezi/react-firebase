import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJTH87Z2Yptea3wMWc3X4X82EuYlIEp1g",
  authDomain: "commanding-air-237503.firebaseapp.com",
  databaseURL: "https://commanding-air-237503.firebaseio.com",
  projectId: "commanding-air-237503",
  storageBucket: "commanding-air-237503.appspot.com",
  messagingSenderId: "558994095624",
  appId: "1:558994095624:web:adeab85439764bf8215bbd",
  measurementId: "G-G76HZF8PPL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
