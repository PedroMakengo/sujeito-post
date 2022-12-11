import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8rPg3OSikoqE_FflS-AQUpZe9xav9xmc",
  authDomain: "sujeitopost-10ffe.firebaseapp.com",
  projectId: "sujeitopost-10ffe",
  storageBucket: "sujeitopost-10ffe.appspot.com",
  messagingSenderId: "116944383602",
  appId: "1:116944383602:web:4bd76f0a09e2e1a0f91ceb",
  measurementId: "G-L6DZZWDGHT",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
