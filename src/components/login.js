import { loginFunction, accountGoogle } from '../lib/auth';

export const renderLogin = (navigateTo) => {
  const container = document.createElement('div');
  container.classList.add('login-page');

  const logo = document.createElement('img');
  logo.setAttribute('src', './images/LogoinversoPeque.png');
  logo.setAttribute('alt', 'Logo mochileiros');
  logo.setAttribute('class', 'logo-invertido');

  const h1 = document.createElement('h1');
  h1.textContent = 'Mochileiros';

  const labelUsername = document.createElement('label');
  labelUsername.setAttribute('for', 'user');

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'email');
  inputUsername.setAttribute('placeholder', 'Ingresa tu correo eléctronico');
  inputUsername.classList.add('inputs');
  inputUsername.setAttribute('id', 'inputUsername');

  const labelPassword = document.createElement('label');
  labelPassword.setAttribute('for', 'password');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Ingresa tu contraseña');
  inputPassword.classList.add('inputs');
  inputPassword.setAttribute('id', 'inputPassword');

  const span = document.createElement('span');
  span.classList.add('span-login');

  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'login');
  btnLogin.textContent = 'Ingresar';

  const btnCreateAccount = document.createElement('button');
  btnCreateAccount.setAttribute('id', 'account');
  btnCreateAccount.textContent = 'Crear cuenta';

  const btnGoogle = document.createElement('button');
  btnGoogle.setAttribute('id', 'login-google');

  container.appendChild(logo);
  container.appendChild(h1);
  container.appendChild(labelUsername);
  container.appendChild(labelPassword);
  container.appendChild(inputUsername);
  container.appendChild(inputPassword);
  container.appendChild(span);
  container.appendChild(btnLogin);
  container.appendChild(btnCreateAccount);
  container.appendChild(btnGoogle);

  // ---------------------------------addEventListeners-----------------------------------
  const buttonLogin = container.querySelector('#login');
  const btnLoginGoogle = container.querySelector('#login-google');
  const inputLoginEmail = container.querySelector('#inputUsername');
  const inputLoginPassword = container.querySelector('#inputPassword');
  const buttnCreateAccount = container.querySelector('#account');
  const errorSpan = container.querySelector('.span-login');

  buttnCreateAccount.addEventListener('click', () => {
    navigateTo('/signin');
  });

  // ---------------------------------Login functions---------------------------------
  // Login email and password
  buttonLogin.addEventListener('click', () => {
    const email = inputLoginEmail.value;
    const password = inputLoginPassword.value;
    loginFunction(email, password)
      .then(() => {
        alert('Te logueaste');
      })

      .catch((errorCode) => {
        if (errorCode === 'auth/invalid-email') {
          errorSpan.innerHTML = 'Correo invalido';
        } else if (errorCode === 'auth/invalid-login-credentials') {
          errorSpan.innerHTML = 'Datos incorrectos, revisa tu correo y contraseña';
        } else if (errorCode === 'auth/user-disabled') {
          errorSpan.innerHTML = 'Tu cuenta se encuentra deshabilitada';
        }
      });
  });

  // Login with Google
  btnLoginGoogle.addEventListener('click', () => {
    accountGoogle();
    alert('Te logueaste');
  });

  return container;
};
