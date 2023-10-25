import {
  db, addDoc, collection, getDocs,
} from './firebase.js';

export const createPost = (post) => {
  addDoc(collection(db, 'posts'), {
    post,
  });
};

export const querySnapshot = getDocs(collection(db, 'posts'));
