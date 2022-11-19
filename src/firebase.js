// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlz2Xm93DhzOWmHW_-B-yFcJGo60pKnSo",
  authDomain: "virtual-classroom-8a746.firebaseapp.com",
  projectId: "virtual-classroom-8a746",
  storageBucket: "virtual-classroom-8a746.appspot.com",
  messagingSenderId: "526722323208",
  appId: "1:526722323208:web:883e22289223698dcbd2bd",
  measurementId: "G-HV3HY9SX4K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
