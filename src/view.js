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
  btnLogin.setAttribute("id", "login-signin");
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
  const signInPage = `
  <img src="./images/LogoPeque.png" alt="logo-mochileiros" class="logo">
  <h2>Crear cuenta</h2>
  <input type="text" placeholder="Usuario" class="inputs">
  <input type="email" placeholder="Correo electrónico" class="inputs">
  <input type="password" placeholder="Contraseña" class="inputs">
  <input type="password" placeholder="Confirma contraseña" class="inputs">
  <button id="login-signin">Crear</button>
  <button id="google"></button>
  `;
  containerAccount.innerHTML = signInPage
  return containerAccount;
};

export const renderFeed = () => {
  const containerFeed = document.createElement("div");
  containerFeed.classList.add('feed')
  const feedPage = `
  
  `
  containerFeed.innerHTML = feedPage
  return containerFeed;
}
