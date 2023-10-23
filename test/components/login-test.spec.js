/**
 * @jest-environment jsdom
 */

import { renderLogin } from '../../src/components/login';

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
  it('cuando se hace click en el botón llama a la función navigateTo', () => {
    const DOM = document.createElement('div');
    DOM.append(renderLogin());
    const createAccountButton = DOM.querySelector('#account');
    createAccountButton.click();
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
