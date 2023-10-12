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

//Login with email
btnLogin.addEventListener("click", () => {
  const email = inputLoginEmail.value;
  const password = inputLoginPassword.value;
  loginFunction(email, password);
});

//Login with Google
btnLogin.addEventListener("click", () => {
  const email = inputLoginEmail.value;
  const password = inputLoginPassword.value;
  loginFunction(email, password);
});

btnCreateAccount.addEventListener("click", () => {
  root.innerHTML = "";
  //---------------------------------render Create Account-----------------------------------
  root.appendChild(renderCreateAccount());
  
  const btnCreate = document.getElementById("signin");
  const btnGoogle = document.getElementById("signin-google");
  
  //Create Account with email
  btnCreate.addEventListener("click", () => {
    const usernameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    createAccountFunction(email, password);
  });
  //Create Account with Google
  btnGoogle.addEventListener("click", () => {
    
  })
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
