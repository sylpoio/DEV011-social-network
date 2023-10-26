import {
  db, addDoc, collection, getDocs, onSnapshot
} from './firebase.js';

const postCollection = collection(db, 'posts');

export const createPost = (post) => {
  addDoc(postCollection, {
    post,
  });
};

export const querySnapshot = getDocs(postCollection);

export paintRealTime = (callback) => onSnapshot(postCollection, callback)