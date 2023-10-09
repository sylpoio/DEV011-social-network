// Este es el punto de entrada de tu aplicacion
import { renderLogin, renderCreateAccount } from './view.js';

const root = document.getElementById('root');

root.appendChild(renderLogin())

const btnCreateAccount = document.getElementById("account");
btnCreateAccount.addEventListener('click', () => {
    root.innerHTML = ''
    root.appendChild(renderCreateAccount())
})