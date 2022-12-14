import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1cQvEBnosAy6oKFbVqEZ6xacQSB-gk4g",
    authDomain: "store-2ce44.firebaseapp.com",
    projectId: "store-2ce44",
    storageBucket: "store-2ce44.appspot.com",
    messagingSenderId: "463829515628",
    appId: "1:463829515628:web:0fffa3a26e40d916a4c749",
    measurementId: "G-SVFZBQE6TL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
