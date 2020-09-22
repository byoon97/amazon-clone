import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6KxLXbTd1-UZ2U7t66T82UPvm32w8GHw",
  authDomain: "clone-backend-ed600.firebaseapp.com",
  databaseURL: "https://clone-backend-ed600.firebaseio.com",
  projectId: "clone-backend-ed600",
  storageBucket: "clone-backend-ed600.appspot.com",
  messagingSenderId: "610938049147",
  appId: "1:610938049147:web:e58ccb8807174119c5c8de",
  measurementId: "G-9P5TZLTT1X",
});

const auth = firebase.auth();

export { auth };
