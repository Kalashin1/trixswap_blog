// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
  // getFirestore, 
  connectFirestoreEmulator,
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Vc_1KljccwAl0YKeTBELuHcO1u-sfAY",
  authDomain: "wyzecrypto.firebaseapp.com",
  projectId: "wyzecrypto",
  storageBucket: "wyzecrypto.appspot.com",
  messagingSenderId: "568891868309",
  appId: "1:568891868309:web:9204a8ececd84751d0079c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export let db = getFirestore(app)

connectFirestoreEmulator(db, 'localhost', 8080);