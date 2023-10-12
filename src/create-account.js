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
    <button id="signin">Crear</button>
    <button id="google"></button>
    `;
  
    containerAccount.innerHTML = signInPage
    return containerAccount;
  };