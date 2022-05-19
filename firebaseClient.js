
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBtB6OORAGUvkxXjnrmp4rRzlx1YNaW6FQ",
    authDomain: "nextjs-auth-e939d.firebaseapp.com",
    databaseURL: "https://nextjs-auth-e939d.firebaseio.com",
    projectId: "nextjs-auth-e939d",
    storageBucket: "nextjs-auth-e939d.appspot.com",
    messagingSenderId: "710092240601",
    appId: "1:710092240601:web:993008e8a4d9f721e330c8"
}

const app = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(app)
