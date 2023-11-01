// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore, addDoc, collection, getDocs, onSnapshot,
  query, orderBy, doc, updateDoc, arrayUnion, arrayRemove, deleteDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEUpOpJ9WR2x4xAbvqgczEbsIJxIozc4g',
  authDomain: 'mochileiros-c4c15.firebaseapp.com',
  databaseURL: 'https://mochileiros-c4c15-default-rtdb.firebaseio.com',
  projectId: 'mochileiros-c4c15',
  storageBucket: 'mochileiros-c4c15.appspot.com',
  messagingSenderId: '433561057859',
  appId: '1:433561057859:web:5a108e1988399e2f0cb2f6',
  measurementId: 'G-KRWSSPZH6S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export {
  addDoc, collection, getDocs, onSnapshot, query,
  orderBy, doc, updateDoc, arrayUnion, arrayRemove, deleteDoc,
};
