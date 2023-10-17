// /**
//  * @jest-environment jsdom
//  */

// import { createAccountFunction } from '../../src/lib/auth';
// import { renderCreateAccount } from '../../src/components/create-account';

// jest.mock('../src/lib/auth', () => ({
//   createAccountFunction: jest.fn(() => Promise.resolve()),
// }));

// describe('createAccountFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof createAccountFunction).toBe('function');
//   });
//   // it('la función crea una cuenta', () => {
//   //   const user = 'mochilerxs@gmail.com';
//   //  expect().toBe('Usuario creado con éxito:', user);
//   // });
// });

// describe('renderCreateAccount', () => {
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
