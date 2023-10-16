import { createAccountFunction, accountGoogle } from '../lib/auth'
export const renderCreateAccount = () => {
  const containerAccount = document.createElement("div");
  containerAccount.classList.add('create-acount-page')
  const signInPage = `
    <img src="./images/LogoPeque.png" alt="logo-mochileiros" class="logo">
    <h2>Crear cuenta</h2>
    <input type="email" placeholder="Correo electrónico" class="inputs">
    <input type="password" placeholder="Contraseña" class="inputs">
    <input type="password" placeholder="Confirma contraseña" class="inputs">
    <span class="promise-message"></span>
    <button id="signin">Crear</button>
    <button id="signin-google"></button>
    `;

  containerAccount.innerHTML = signInPage

  //---------------------------------addEventListeners--------------------------

   const btnCreate = containerAccount.querySelector("#signin");
   const btnGoogle = containerAccount.querySelector("#signin-google");
   const emailInput = containerAccount.querySelector("input[type='email']");
   const passwordInput = containerAccount.querySelector("input[type='password']");
   const confirmPasswordInput = containerAccount.querySelector("input[placeholder='Confirma contraseña']");
   const promiseMessage = containerAccount.querySelector(".promise-message");



   //---------------------------------Create account functions-----------------------------------
   //Create Account with email
   btnCreate.addEventListener("click", () => {
     const email = emailInput.value;
     const password = passwordInput.value;
     if (password !== confirmPasswordInput.value) {
      alert('Tu contraseña no coincide')
     } else {
      createAccountFunction(email, password)
      .then(() => {
        promiseMessage.textContent = 'Usuario creado con éxito';
      })
      .catch((errorCode) => {
        if(errorCode === 'auth/invalid-email') {
          promiseMessage.innerHTML = 'Correo invalido';
        } else if(errorCode === 'auth/weak-password') {
          promiseMessage.innerHTML = 'La contraseña requiere mínimo 6 caracteres';      
        } else if(errorCode === 'auth/email-already-in-use') {
          promiseMessage.innerHTML = 'El correo ingresado ya esta registrado';      
        }
      });
     }
   });
   //Create Account with Google
   btnGoogle.addEventListener("click", () => {
     accountGoogle();
   });


  return containerAccount;
};