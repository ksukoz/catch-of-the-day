import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCf6hxLSLdXD-CUqhdVtFmCv20q0RvouEc",
  authDomain: "catch-of-the-day-senu.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-senu.firebaseio.com"
});
const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;