export const renderLogin = () => {
  const container = document.createElement("div");
  container.classList.add("login-page")

  const logo = document.createElement("img");
  logo.setAttribute("src", "./images/LogoinversoPeque.png");
  logo.setAttribute("alt", "Logo mochileiros");
  logo.setAttribute("class", "logo-invertido");

  const h1 = document.createElement("h1");
  h1.textContent = "Mochileiros";

  const labelUsername = document.createElement("label");
  labelUsername.setAttribute("for", "user");

  const inputUsername = document.createElement("input");
  inputUsername.setAttribute("type", "text");
  inputUsername.setAttribute("placeholder", "Ingresa tu nombre de usuario");
  inputUsername.classList.add("inputs");

  const labelPassword = document.createElement("label");
  labelPassword.setAttribute("for", "password");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
  inputPassword.classList.add("inputs");

  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("id", "login");
  btnLogin.textContent = "Ingresar";

  const btnCreateAccount = document.createElement("button");
  btnCreateAccount.setAttribute("id", "account");
  btnCreateAccount.textContent = "Crear cuenta";

  const btnGoogle = document.createElement("button");
  btnGoogle.setAttribute("id", "google");

  container.appendChild(logo);
  container.appendChild(h1);
  container.appendChild(labelUsername);
  container.appendChild(labelPassword);
  container.appendChild(inputUsername);
  container.appendChild(inputPassword);
  container.appendChild(btnLogin);
  container.appendChild(btnCreateAccount);
  container.appendChild(btnGoogle);

  return container;
};

export const renderCreateAccount = () => {
  const containerAccount = document.createElement("div");
  containerAccount.classList.add('create-acount-page')
  const form = `
  <img src="./images/LogoPeque.png" alt="logo-mochileiros">
  <h2>Crear cuenta</h2>
  <input type="text" placeholder="Usuario">
  <input type="email" placeholder="Correo electrónico">
  <input type="password" placeholder="Contraseña">
  <input type="password" placeholder="Confirma contraseña">
  <button id="create-account">Crear</button>
  <button id="google-create"></button>
  `;
  containerAccount.innerHTML = form
  return containerAccount;
};
