// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
// TODO: Remove env file from git tracking

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK-MJvoP8mC0O_WdDrD9xXUXcnMh7WjEM",
  authDomain: "fir-demo-94b82.firebaseapp.com",
  projectId: "fir-demo-94b82",
  storageBucket: "fir-demo-94b82.appspot.com",
  messagingSenderId: "162888141747",
  appId: "1:162888141747:web:c048d9741e493a785f99c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporter some services
const database = getFirestore( app )

export { database };