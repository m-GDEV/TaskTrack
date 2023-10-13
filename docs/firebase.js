// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8pVriDep_GPDaHL7WzRmzWSxqRo-QU4",
  authDomain: "tasktrack-38280.firebaseapp.com",
  databaseURL: "https://tasktrack-38280-default-rtdb.firebaseio.com",
  projectId: "tasktrack-38280",
  storageBucket: "tasktrack-38280.appspot.com",
  messagingSenderId: "989803060030",
  appId: "1:989803060030:web:1f3a289c4a96c03467aa6f",
  measurementId: "G-J75MWE9PQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
