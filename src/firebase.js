import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJa0RAJRL6G_rIlc2XewbEWAcxXcmukPU",
    authDomain: "clone-b34c8.firebaseapp.com",
    projectId: "clone-b34c8",
    storageBucket: "clone-b34c8.appspot.com",
    messagingSenderId: "434921713658",
    appId: "1:434921713658:web:032129dc7302c99ad7fe43",
    measurementId: "G-47MYE3ZE75"
  };

  const firebaseApp = firebase.default.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};