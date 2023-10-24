import { db, addDoc, collection } from './firebase.js';

export const createPost = () => {
  addDoc(collection(db, 'posts'), {
    post: 'Ada',
  });
};
