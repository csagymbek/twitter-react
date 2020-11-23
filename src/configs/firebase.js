import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDV-q2agHUzYZO7w3OABsnWNkKmU_D2No4",
  authDomain: "twitter-react-dc883.firebaseapp.com",
  databaseURL: "https://twitter-react-dc883.firebaseio.com",
  projectId: "twitter-react-dc883",
  storageBucket: "twitter-react-dc883.appspot.com",
  messagingSenderId: "1067819295767",
  appId: "1:1067819295767:web:5ff10993833ae4796be852",
  measurementId: "G-TJ75D9YYV2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
