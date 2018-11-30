import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjsfTgTL9kOIrW2aG91ANZPHHkVOl-AGQ",
  authDomain: "clockwork-bookstore-cd1a9.firebaseapp.com",
  databaseURL: "https://clockwork-bookstore-cd1a9.firebaseio.com",
  projectId: "clockwork-bookstore-cd1a9",
  storageBucket: "clockwork-bookstore-cd1a9.appspot.com",
  messagingSenderId: "787295067093"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
