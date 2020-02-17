// FIREBASE

const firebaseApp = require('firebase')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0i7uQv2FEMq7NxjvirPL_BAm1SwqZt-s",
  authDomain: "mvpmake.firebaseapp.com",
  databaseURL: "https://mvpmake.firebaseio.com",
  projectId: "mvpmake",
  storageBucket: "mvpmake.appspot.com",
  messagingSenderId: "653515335601",
  appId: "1:653515335601:web:1719f601ba3f18cdf97f90",
  measurementId: "G-27S6YQ4Q79"
};
// Initialize Firebase
export const firebase = firebaseApp.initializeApp(firebaseConfig);
