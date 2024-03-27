import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBLB2xZGOpNijga-cs_AlVC08kbFrvCtEQ",
    authDomain: "e-commerce-mern-project.firebaseapp.com",
    projectId: "e-commerce-mern-project",
    storageBucket: "e-commerce-mern-project.appspot.com",
    messagingSenderId: "472597429436",
    appId: "1:472597429436:web:a3e2487371fe625f9f24b9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


