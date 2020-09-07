import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAQLZbHoVJIaadsCSd7N5aR4DZV0iLmQr0",
  authDomain: "geo-jokes-50650.firebaseapp.com",
  databaseURL: "https://geo-jokes-50650.firebaseio.com",
  projectId: "geo-jokes-50650",
  storageBucket: "geo-jokes-50650.appspot.com",
  messagingSenderId: "548398581452",
  appId: "1:548398581452:web:330ad3a181e76db7e7e469",
  measurementId: "G-YW8J5K2TKD"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore
