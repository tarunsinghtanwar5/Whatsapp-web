import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ2uqUioPVZ4HR-f6tkIwevqAloxXcF5Y",
  authDomain: "whatsapp-web-764c9.firebaseapp.com",
  projectId: "whatsapp-web-764c9",
  storageBucket: "whatsapp-web-764c9.appspot.com",
  messagingSenderId: "1049736529995",
  appId: "1:1049736529995:web:2dfd9122b50060716be5ce",
  measurementId: "G-TQGWB29N8R"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
