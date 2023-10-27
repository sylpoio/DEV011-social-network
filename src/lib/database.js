import {
  db, addDoc, collection, getDocs, onSnapshot, query, orderBy,
} from './firebase.js';

const postCollection = collection(db, 'posts');
export const createPost = (post) => {
  // const currentUser = sessionStorage.getItem('usuarioLogeado');
  addDoc(postCollection, {
    post,
    date: Date.now(),
    // displayName: currentUser,
  });
};

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);