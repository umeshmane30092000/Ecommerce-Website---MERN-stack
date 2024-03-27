import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARFqWUwptUWvKE1lMIv_6T9R_PG6mrr4g",
    authDomain: "authproject-c48e9.firebaseapp.com",
    projectId: "authproject-c48e9",
    storageBucket: "authproject-c48e9.appspot.com",
    messagingSenderId: "245613345014",
    appId: "1:245613345014:web:8b5d8c4243efdb9c7fd4d7",
    measurementId: "G-J2K146JSR7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

