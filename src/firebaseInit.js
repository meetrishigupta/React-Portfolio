import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMspQ2sHdv0UNcHSbOtjiJDubWDlT7xuA",
    authDomain: "react-portfolio-d0d31.firebaseapp.com",
    projectId: "react-portfolio-d0d31",
    storageBucket: "react-portfolio-d0d31.appspot.com",
    messagingSenderId: "759399668293",
    appId: "1:759399668293:web:6f94abd28a5c55a900e12c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
