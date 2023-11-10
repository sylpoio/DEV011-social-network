import {
  db, addDoc, collection, getDocs, onSnapshot,
  query, orderBy, doc, updateDoc, arrayUnion, arrayRemove, deleteDoc,
} from './firebase.js';

const postCollection = collection(db, 'posts');
export const createPost = (post, photoUrl) => {
  const currentUser = sessionStorage.getItem('usuarioLogeado');
  const currentEmailUser = sessionStorage.getItem('emailUsuarioLogeado');
  addDoc(postCollection, {
    post,
    date: Date.now(),
    displayName: currentUser,
    likes: [],
    photoUrl,
    email: currentEmailUser,
  });
};

export const postReferenceLike = async (postId, dataLikes) => {
  const postData = doc(db, 'posts', postId);
  // Set the email for the posts likes
  const currentEmailUser = sessionStorage.getItem('emailUsuarioLogeado');
  if (dataLikes.includes(currentEmailUser)) {
  // Atomically add a new region to the "regions" array field.
    await updateDoc(postData, {
      likes: arrayRemove(currentEmailUser),
    });
    return dataLikes;
  }
  // Atomically remove a region from the "regions" array field.
  await updateDoc(postData, {
    likes: arrayUnion(currentEmailUser),
  });
  return dataLikes;
};
export const editPostFunction = async (postId, textEditValue, renderTextPost) => {
  const editPost = doc(db, 'posts', postId);
  await updateDoc(editPost, {
    post: textEditValue,
  });
  return renderTextPost;
};
export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);

export const deletePostFunction = async (postId) => {
  await deleteDoc(doc(db, 'posts', postId));
};
