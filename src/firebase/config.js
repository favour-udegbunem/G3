import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALl8nuwU5vzKX_4m7PIu-8uqOzXsch_o8",
  authDomain: "global-giant-girls.firebaseapp.com",
  projectId: "global-giant-girls",
  storageBucket: "global-giant-girls.firebasestorage.app",
  messagingSenderId: "1066502914927",
  appId: "1:1066502914927:web:34426b651c1c6655821e9a",
  measurementId: "G-Q2K14J3GQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);