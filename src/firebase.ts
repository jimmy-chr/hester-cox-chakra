// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwDol7KnkMfJrZpRVOUC9Yjj9XTvJe43c",
  authDomain: "hester-cox.firebaseapp.com",
  projectId: "hester-cox",
  storageBucket: "hester-cox.appspot.com",
  messagingSenderId: "784509457199",
  appId: "1:784509457199:web:51832d4d2710100dcbc7da",
  measurementId: "G-SH7RWQN0H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
