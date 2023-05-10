import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyB8giWQ1Q36aUyBFjammHP4rwRaWvXhRXE",
  authDomain: "qwerty-55455.firebaseapp.com",
  projectId: "qwerty-55455",
  storageBucket: "qwerty-55455.appspot.com",
  messagingSenderId: "523047295697",
  appId: "1:523047295697:web:ee95a386d064c2044b43f0",
  measurementId: "G-MWXQQKK4SB"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()


export  {
   storage, firebase as default
 }


