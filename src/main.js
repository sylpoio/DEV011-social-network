// Este es el punto de entrada de tu aplicacion
import { renderLogin } from "./login.js";
import { renderCreateAccount } from "./create-account.js";
import {
  createAccountFunction,
  loginFunction,
  AccountGoogle,
} from "./lib/auth.js";
//import { renderFeed} from './feed.js' ;
import { error} from './error.js' ;
// import { doc, setDoc } from "firebase/firestore";

let root = document.getElementById("root");



//---------------------------------Routes-----------------------------------
//const defaultRoute = "/";
// const routes = [
//   { path: "/", component: renderLogin },
//   { path: "/signin", component: renderCreateAccount },
//   //{ path: "/feed", component: feed },
//   { path: "/error", component: error },
// ];
// function navigateTo(hash) {
//   const route = routes.find((routeFound) => routeFound.path === hash);

//   if (route && route.component) {
//     window.history.pushState(
//       {},
//       route.path,
//       window.location.origin + route.path
//     );

//     if (root.firstChild) {
//       root.removeChild(root.firstChild);
//     }
    
//     root.appendChild(route.component());
//   } else {
//     navigateTo("/error");
//   }

//   window.onpopstate = () => {
//     navigateTo(window.location.pathname);
//   };
//   navigateTo(window.location.pathname || defaultRoute);
//   root.appendChild(route.component(navigateTo));
// }

//---------------------------------Render Login-----------------------------------
root.appendChild(renderLogin());
const btnCreateAccount = document.getElementById("account");
const btnLogin = document.getElementById("login");
const btnLoginGoogle = document.getElementById("login-google");
const inputLoginEmail = document.getElementById("inputUsername");
const inputLoginPassword = document.getElementById("inputPassword");

//---------------------------------Login functions---------------------------------
// Login email and password
btnLogin.addEventListener("click", () => {
  const email = inputLoginEmail.value;
  const password = inputLoginPassword.value;
  loginFunction(email, password);
});

//Login with Google
btnLoginGoogle.addEventListener("click", () => {
  AccountGoogle();
  alert("Te logueaste");
});

btnCreateAccount.addEventListener("click", () => {
  navigateTo("/signin");
  root.innerHTML = "";

  //---------------------------------Render Create Account--------------------------
  //root.appendChild(renderCreateAccount());

  const btnCreate = document.getElementById("signin");
  const btnGoogle = document.getElementById("signin-google");

  //---------------------------------Create aacount functions-----------------------------------
  //Create Account with email
  btnCreate.addEventListener("click", () => {
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");

    const email = emailInput.value;
    const password = passwordInput.value;
    createAccountFunction(email, password);
  });
  //Create Account with Google
  btnGoogle.addEventListener("click", () => {
    AccountGoogle();
  });
});