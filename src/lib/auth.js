import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut,
} from 'firebase/auth';
/* import { doc, setDoc } from 'firebase/firestore';  */

const auth = getAuth();

// ---------------------------------Create Account Function-----------------------------------

export const createAccountFunction = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve();
      console.log('Usuario creado con éxito:', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      reject(errorCode);
      console.error('Error al crear el usuario:', errorCode, errorMessage);
    });
});

// ---------------------------------Google authentication-----------------------------------

export const accountGoogle = () => new Promise((resolve, reject) => {
  const provider = new GoogleAuthProvider();
  console.log('Button with id "google" clicked');
  console.log('Provider:', provider);

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      resolve();
      // IdP data available using getAdditionalUserInfo(result)
      console.log(token, user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCodeGoogle = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      reject(errorCodeGoogle);
      console.log(errorMessage, email, credential);
    });
});
// ---------------------------------Login Function-----------------------------------
export const loginFunction = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      resolve();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      reject(errorCode);
      console.error('Error al ingresar el usuario:', errorCode, errorMessage);
    });
});
// ----------------------Sign out Function--------------------------------
export const signOutFunction = () => {
  signOut(auth);
};
