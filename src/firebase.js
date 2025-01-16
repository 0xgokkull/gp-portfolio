// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3qwPFkVXTTDhAzaQKqF_38Fsn08Vdf5k",
  authDomain: "gp-portfolio-10851.firebaseapp.com",
  projectId: "gp-portfolio-10851",
  storageBucket: "gp-portfolio-10851.firebasestorage.app",
  messagingSenderId: "959196125523",
  appId: "1:959196125523:web:1c7270753fbf59caeee9a6",
  measurementId: "G-8CFMDQ38S8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
