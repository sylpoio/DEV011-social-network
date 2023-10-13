import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
/* import { doc, setDoc } from "firebase/firestore";  */

const auth = getAuth();

//---------------------------------Create Account Function-----------------------------------

export const createAccountFunction = (email,password) => new Promise((resolve, reject) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Usuario creado con éxito:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error al crear el usuario:", errorCode, errorMessage);
    
    const errorSpan = document.querySelector(".error-create-account");
    if(errorCode === 'auth/invalid-email') {
      errorSpan.innerHTML = 'Correo invalido';
    } else if(errorCode === 'auth/weak-password') {
      errorSpan.innerHTML = 'La contraseña requiere mínimo 6 caracteres';      
    } else if(errorCode === 'auth/email-already-in-use') {
      errorSpan.innerHTML = 'El correo ingresado ya esta registrado';      
    }

  });
})

//  //---------------------------------Google authentication-----------------------------------

 export const accountGoogle = () => {
   const provider = new GoogleAuthProvider();
   console.log('Button with id "google" clicked');
   console.log('Provider:', provider);
   signInWithRedirect(auth, provider);
};

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
    console.error("Error al ingresar el usuario:", errorCode, errorMessage);
    
    const errorSpan = document.querySelector(".span-login");
    if(errorCode === 'auth/invalid-email') {
      errorSpan.innerHTML = 'Correo invalido';
    } else if(errorCode === 'auth/invalid-login-credentials') {
      errorSpan.innerHTML = 'Datos incorrectos, revisa tu correo y contraseña';
    } else if(errorCode === 'auth/user-disabled') {
      errorSpan.innerHTML ='Tu cuenta se encuentra deshabilitada';
    }
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