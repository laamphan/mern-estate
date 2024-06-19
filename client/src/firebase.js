// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-180624.firebaseapp.com',
  projectId: 'mern-estate-180624',
  storageBucket: 'mern-estate-180624.appspot.com',
  messagingSenderId: '931484801289',
  appId: '1:931484801289:web:14e928a0c4a05d3ddcdbd8',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
