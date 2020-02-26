import firebase from "firebase/app";
import firebaseConfig from "./config/firebase";

firebase.initializeApp(firebaseConfig);

export default firebase;