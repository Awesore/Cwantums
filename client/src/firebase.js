// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vadim-estate.firebaseapp.com",
  projectId: "vadim-estate",
  storageBucket: "vadim-estate.appspot.com",
  messagingSenderId: "1066207809329",
  appId: "1:1066207809329:web:ebb5ae80764a8315f9ea10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);