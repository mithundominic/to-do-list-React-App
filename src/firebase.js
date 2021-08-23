import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApjrPPJF-Jp81FZXimgTVyhrum1p9-Cqc",
  authDomain: "to-do-list-my-first-react-app.firebaseapp.com",
  projectId: "to-do-list-my-first-react-app",
  storageBucket: "to-do-list-my-first-react-app.appspot.com",
  messagingSenderId: "1023174752557",
  appId: "1:1023174752557:web:b4e292567bef7ecf3c3ba4",
  measurementId: "G-TQZXW6S02Y",
});

const db = firebaseApp.firestore();
export default db;
