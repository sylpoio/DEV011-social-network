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
    <span class="error-create-account"></span>
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


   //---------------------------------Create account functions-----------------------------------
   //Create Account with email
   btnCreate.addEventListener("click", () => {
     const email = emailInput.value;
     const password = passwordInput.value;
     if (password !== confirmPasswordInput.value) {
      alert('Tu contraseña no coincide')
     } else {
      createAccountFunction(email, password);
     }
   });
   //Create Account with Google
   btnGoogle.addEventListener("click", () => {
     accountGoogle();
   });


  return containerAccount;
};