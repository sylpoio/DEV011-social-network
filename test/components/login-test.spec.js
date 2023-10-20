/**
 * @jest-environment jsdom
 */

import { renderLogin } from '../../src/components/login';
// import { navigateTo } from '../../src/main'

jest.mock('../../src/lib/auth', () => ({
  loginFunctionMock: jest.fn(() => Promise.resolve()),
}));

describe('renderLogin', () => {
  it('debería ser una función', () => {
    expect(typeof renderLogin).toBe('function');
  });
  it('tiene un botón para crear cuenta', () => {
    const DOM = document.createElement('div');
    DOM.append(renderLogin());
    const haveCreateButton = DOM.querySelector('#login');
    expect(haveCreateButton).not.toBe(undefined);
  });
  it('cuando se hace click en el botón crear cuenta nos lleva a la url de signin', () => {
    const DOM = document.createElement('div');
    const navigateToMock = jest.fn();
    DOM.append(renderLogin(navigateToMock));
    const createAccountButton = DOM.querySelector('#account');
    createAccountButton.click();
    expect(navigateToMock).toHaveBeenLastCalledWith('/signin');
  });
   it('cuando se hace click en el botón crear cuenta nos lleva a la url de feed', () => {
    const DOM = document.createElement('div');
    const navigateToMock = jest.fn();
    const email = document.querySelector('#inputUsername');
    const password = document.querySelector('#inputPassword');
    const loginFunctionMock = jest.fn((email, password) => {
      if(email === 'mochilerxs@gmail.com' && password === '123456') {
        return Promise.resolve(navigateToMock)
      } else {
        return Promise.reject(new Error('error'))
      }
    });
    
    DOM.append(renderLogin(loginFunctionMock));
    DOM.append(loginFunctionMock(navigateToMock));
    const loginButton = DOM.querySelector('#login');
    loginButton.click();
    expect(navigateToMock).toHaveBeenLastCalledWith('/feed');
  });
});








// describe('renderLogin', () => {
//   it('tiene un botón para crear cuenta', () => {
//     const DOM = document.createElement('main');
//     const div = document.createElement('div');
//     DOM.appendChild(div);
//     DOM.setAttribute('id', 'root');
//     DOM.append(renderCreateAccount);
//     const haveCreateButton = DOM.querySelector('#signin');
//     expect(haveCreateButton).toBe(undefined);
//   });
// });
