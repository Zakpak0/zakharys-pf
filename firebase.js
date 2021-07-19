import firebase from "firebase";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYiHuaxZjO3-zqykNqh7dJ9Fdf4euOL0I",
  authDomain: "cleverclone-32f32.firebaseapp.com",
  projectId: "cleverclone-32f32",
  storageBucket: "cleverclone-32f32.appspot.com",
  messagingSenderId: "230363216283",
  appId: "1:230363216283:web:a91f70535100441c4c093e",
  measurementId: "G-VCQQG50VML"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };