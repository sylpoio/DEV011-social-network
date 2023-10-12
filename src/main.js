// Este es el punto de entrada de tu aplicacion
import { renderLogin } from "./login.js";
import { renderCreateAccount } from "./create-account.js";
//import { renderFeed} from './feed.js' ;
//import { error} from './error.js' ;
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
/* import { doc, setDoc } from "firebase/firestore";  */

const root = document.getElementById("root");
const defaultRoute = "/";

//---------------------------------Render Login-----------------------------------
root.appendChild(renderLogin());

const btnCreateAccount = document.getElementById("account");
const btnLogin = document.getElementById("login");
const inputLoginEmail = document.getElementById("inputUsername");
const inputLoginPassword = document.getElementById("inputPassword");
const btnGoogle = document.getElementById("google");

const auth = getAuth();
btnGoogle.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  console.log("GOOGLE LOGIN");
});

getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

btnLogin.addEventListener("click", () => {
  //---------------------------------Login Function-----------------------------------

  const emailLogin = inputLoginEmail.value;
  const passwordLogin = inputLoginPassword.value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Te logueaste");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("no existe el correo");
    });
});

btnCreateAccount.addEventListener("click", () => {
  root.innerHTML = "";
  //---------------------------------render Create Account-----------------------------------
  root.appendChild(renderCreateAccount());

  const btnCreate = document.getElementById("signin");

  btnCreate.addEventListener("click", () => {
    const usernameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    //---------------------------------Create Account Function-----------------------------------
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
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
  });
  //---------------------------------Google authentication-----------------------------------

  const btnGoogle = document.getElementById("google");
  btnGoogle.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    console.log('Button with id "google" clicked');
    console.log("Provider:", provider);
    const auth = getAuth();
    signInWithRedirect(auth, provider);
  });
});

//---------------------------------Rutas-----------------------------------
const routes = [
  { path: "/", component: login },
  { path: "/signin", component: create - account },
  { path: "/feed", component: feed },
  { path: "/error", component: error },
];

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );
  }
  if (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(route.component());
}
