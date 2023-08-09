import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAD1a3156hKQ6ysPryYdhosvzXebyVzTPU",
    authDomain: "todonative-7022b.firebaseapp.com",
    projectId: "todonative-7022b",
    storageBucket: "todonative-7022b.appspot.com",
    messagingSenderId: "366109462089",
    appId: "1:366109462089:web:2836cba3ea737e1df37998",
    measurementId: "G-L4467DL7QB"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };