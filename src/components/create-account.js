import {
  createAccountFunction,
  accountGoogle,
} from '../lib/auth';

export const renderCreateAccount = (navigateTo) => {
  const containerAccount = document.createElement('div');
  containerAccount.classList.add('create-acount-page');
  const signInPage = `
    <img src='./images/LogoPeque.png' alt='logo-mochileiros' class='logo'>
    <h2>Crear cuenta</h2>
    <input type='email' placeholder='Correo electrónico' class='inputs'>
    <input type='password' placeholder='Contraseña' class='inputs'>
    <input type='password' placeholder='Confirma contraseña' class='inputs'>
    <span class='error-message'style='display:none'></span>
    <button id='signin'>Crear</button>
    <div class='signin-google'>
    <label for='signin-google'> Continuar con: </label>
    <button id='signin-google'></button>
    </div>
    `;

  containerAccount.innerHTML = signInPage;

  // ---------------------------------DOM call--------------------------
  const btnCreate = containerAccount.querySelector('#signin');
  const btnGoogle = containerAccount.querySelector('#signin-google');
  const emailInput = containerAccount.querySelector("input[type='email']");
  const passwordInput = containerAccount.querySelector("input[type='password']");
  const confirmPasswordInput = containerAccount.querySelector("input[placeholder='Confirma contraseña']");
  const errorMessage = containerAccount.querySelector('.error-message');

  // ---------------------------------Create account functions-----------------------------------
  // Create Account with email
  btnCreate.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (password !== confirmPasswordInput.value) {
      errorMessage.style.display = 'block';
      errorMessage.innerHTML = 'Tu contraseña no coincide';
    } else {
      createAccountFunction(email, password)
        .then(() => {
          navigateTo('/feed');
        })
        .catch((errorCode) => {
          errorMessage.style.display = 'block';
          if (errorCode === 'auth/invalid-email') {
            errorMessage.innerHTML = 'Correo invalido';
          } else if (errorCode === 'auth/weak-password') {
            errorMessage.innerHTML = 'La contraseña requiere mínimo 6 caracteres';
          } else if (errorCode === 'auth/email-already-in-use') {
            errorMessage.innerHTML = 'El correo ingresado ya esta registrado';
          } else if (errorCode === 'auth/missing-password') {
            errorMessage.innerHTML = 'Olvidaste escribir una contraseña';
          }
        });
    }
  });
  // Create Account with Google
  btnGoogle.addEventListener('click', () => {
    accountGoogle()
    .then(() => {
      navigateTo('/feed');
    })
    .catch((errorCode) => {
      errorMessage.style.display = 'block';
      navigateTo('/signin');
      console.log(errorCode);
    });

  });
  return containerAccount;
};
