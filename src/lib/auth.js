import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
/* import { doc, setDoc } from "firebase/firestore";  */

const auth = getAuth();

//---------------------------------Create Account Function-----------------------------------

export const createAccountFunction = (email,password) => new Promise((resolve, reject) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    /*         await user.updateProfile({
               displayName: username
             }); */
    /*         user.updateProfile({
               displayName: displayName
             }) */
    /*         firebase.firestore().collection('users').doc(user.uid).set({
               username: username
             }) */
    /*        await setDoc(doc(db, username), {
                  username: username
                }); */
    console.log("HOLA", userCredential);
    console.log("Usuario creado con éxito:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error al crear el usuario:", errorCode, errorMessage);
  });
})

//  //---------------------------------Google authentication-----------------------------------

//  const btnGoogle = document.getElementById("google");
//  btnGoogle.addEventListener('click', () => {
//    const provider = new GoogleAuthProvider();
//    console.log('Button with id "google" clicked');
//    console.log('Provider:', provider);
//    signInWithRedirect(auth, provider);
// });

// //---------------------------------Login Function-----------------------------------
export const loginFunction = (email,password) => new Promise((resolve, reject) => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('Te logueaste')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

//   //---------------------------------Redirect Feed Function-----------------------------------
//   getRedirectResult(auth)
// .then((result) => {
//   // This gives you a Google Access Token. You can use it to access Google APIs.
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;

//   // The signed-in user info.
//   const user = result.user;
//   // IdP data available using getAdditionalUserInfo(result)
//   // ...
// }).catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.customData.email;
//   // The AuthCredential type that was used.
//   const credential = GoogleAuthProvider.credentialFromError(error);
//   // ...
// });

// //---------------------------------Login Google Function-----------------------------------

// btnGoogle.addEventListener('click', () => {
//   const provider = new GoogleAuthProvider();
//   signInWithRedirect(auth, provider);
//   console.log('GOOGLE LOGIN');
// });