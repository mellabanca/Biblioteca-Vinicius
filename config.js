import firebase from "firebase/app";
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDYMonC2CXFHu6qwrPfXBUWXZri0fzBQv0",
  authDomain: "bibliotecapublica-8d814.firebaseapp.com",
  projectId: "bibliotecapublica-8d814",
  storageBucket: "bibliotecapublica-8d814.appspot.com",
  messagingSenderId: "870652678862",
  appId: "1:870652678862:web:755cce0e6e0f220b6a369f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();