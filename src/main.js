// Este es el punto de entrada de tu aplicacion
import { renderLogin, renderCreateAccount } from './view.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const root = document.getElementById('root');

root.appendChild(renderLogin())

const btnCreateAccount = document.getElementById("account");
btnCreateAccount.addEventListener('click', () => {
  root.innerHTML = ''
  root.appendChild(renderCreateAccount())

  const btnCreate = document.getElementById('signin')
  btnCreate.addEventListener('click', () => {
    const usernameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    
    const displayName = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const auth = getAuth();

    
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then(async (userCredential) => {
        const user = userCredential.user;
/*         user.updateProfile({
          displayName: displayName
        }) */
/*         firebase.firestore().collection('users').doc(user.uid).set({
          username: username
        }) */
 /*        await setDoc(doc(db, username), {
              username: username
            }); */
            console.log('HOLA', userCredential);
        console.log("Usuario creado con éxito:", user);

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al crear el usuario:", errorCode, errorMessage);

      });
  })




})
