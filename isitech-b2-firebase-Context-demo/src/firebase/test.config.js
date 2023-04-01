// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_TMmI_2BulXvht_24SZo8mj3VY6SLh0",
  authDomain: "vite-projet.firebaseapp.com",
  projectId: "vite-projet",
  storageBucket: "vite-projet.appspot.com",
  messagingSenderId: "375670900923",
  appId: "1:375670900923:web:feba06af12723a53c3419e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export { database };