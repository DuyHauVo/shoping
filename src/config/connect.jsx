import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDoykpUu2gQP8kcq6TDu65U_CMYzSmot08",
    authDomain: "shopshoe-7c7af.firebaseapp.com",
    projectId: "shopshoe-7c7af",
    storageBucket: "shopshoe-7c7af.appspot.com",
    messagingSenderId: "848761366438",
    appId: "1:848761366438:web:1975ae8bf8a32419e45167",
    measurementId: "G-QV96G9FD3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

