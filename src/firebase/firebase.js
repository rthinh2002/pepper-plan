import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDFezHWBNuO7CEW7sT19-hujcIBIi2nZac",
    authDomain: "pepper-plan.firebaseapp.com",
    databaseURL: "https://pepper-plan-default-rtdb.firebaseio.com",
    projectId: "pepper-plan",
    storageBucket: "pepper-plan.appspot.com",
    messagingSenderId: "639102634476",
    appId: "1:639102634476:web:d1655378f47bf236c818c9",
    measurementId: "G-0JBGVZW02S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);