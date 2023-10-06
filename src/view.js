export const renderLogin = () => {

  const container = document.createElement('div')

  const logo = document.createElement('img')
  logo.setAttribute('src', './images/LogoinversoPeque.png')
  logo.setAttribute('alt', 'Logo mochileiros')
  logo.setAttribute('class', 'logo-invertido')

  const h1 = document.createElement('h1')
  h1.textContent = 'Mochileiros'

  const labelUsername = document.createElement('label')
  labelUsername.setAttribute('for', 'user')

  const inputUsername = document.createElement('input')
  inputUsername.setAttribute('type', 'text')

  const labelPassword = document.createElement('label')
  labelPassword.setAttribute('for', 'password')

  const inputPassword = document.createElement('input')
  inputPassword.setAttribute('type', 'password')

  const btnLogin = document.createElement('button')
  btnLogin.textContent = 'Ingresar'

  const btnCreateAccount = document.createElement('button')
  btnCreateAccount.textContent = 'Crear cuenta'

  const btnGoogle = document.createElement('button')
  btnGoogle.textContent = 'Google'

  labelUsername.appendChild(inputUsername)
  labelPassword.appendChild(inputPassword)
  
  container.appendChild(logo)
  container.appendChild(h1)
  container.appendChild(labelUsername)
  container.appendChild(labelPassword)
  container.appendChild(btnLogin)
  container.appendChild(btnCreateAccount)
  container.appendChild(btnGoogle)

  return container
}