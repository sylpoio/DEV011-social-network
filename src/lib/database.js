import { async } from 'regenerator-runtime';
import {
  db, addDoc, collection, getDocs, onSnapshot, query, orderBy, doc, updateDoc, arrayUnion, arrayRemove
} from './firebase.js';

const postCollection = collection(db, 'posts');
export const createPost = (post) => {
  const currentUser = sessionStorage.getItem('usuarioLogeado');
  addDoc(postCollection, {
    post,
    date: Date.now(),
    displayName: currentUser,
    likes: [],
  });
};

export const postReferenceLike = async(postId, dataLikes) => {
  const postData = doc(db, 'posts', postId);
  console.log('esta es la colección', postData.id);
  // Set the email for the posts likes
  const currentEmailUser = sessionStorage.getItem('emailUsuarioLogeado');
  if (dataLikes.includes(currentEmailUser)) {
  // Atomically add a new region to the "regions" array field.
await updateDoc(postData, {
  likes: arrayRemove(currentEmailUser)
});
  } else { 
// Atomically remove a region from the "regions" array field.
await updateDoc(postData, {
  likes: arrayUnion(currentEmailUser)
});
};
}

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);