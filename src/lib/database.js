import {
  db, addDoc, collection, getDocs, onSnapshot, query, orderBy,
} from './firebase.js';

// Create a new post reference with an auto-generated id

const postCollection = collection(db, 'posts');
export const createPost = (post) => {
  const currentUser = sessionStorage.getItem('usuarioLogeado');
  addDoc(postCollection, {
    post,
    date: Date.now(),
    displayName: currentUser,
  });
};
const commentCollection = collection(db, 'comments');
export const createComment = (comment, postId) => {
  const currentUser = sessionStorage.getItem('usuarioLogeado');
  addDoc(commentCollection, {
    comment,
    date: Date.now(),
    displayName: currentUser,
    postid: postId,
  });
};

export const querySnapshot = getDocs(postCollection);
export const querySnapshotComment = getDocs(commentCollection);

const q = query(postCollection, orderBy('date', 'desc'));
const commentQuery = query(commentCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);
export const paintRealTimeComment = (callback) => onSnapshot(commentQuery, callback);
