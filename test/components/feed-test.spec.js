/**
* @jest-environment jsdom
*/

import { renderFeed } from '../../src/components/feed';

jest.mock('../../src/lib/auth', () => ({
  signOutFunction: jest.fn(() => Promise.resolve()),
}));

describe('renderFeed', () => {
  it('debería ser una función', () => {
    expect(typeof renderFeed).toBe('function');
  });
  it('tiene un botón para desloggearse', () => {
    const DOM = document.createElement('div');
    DOM.append(renderFeed());
    const haveSignOutButton = DOM.querySelector('#signout');
    expect(haveSignOutButton).not.toBe(undefined);
  });
  it('cuando se hace click en el botón de Comparte tu experiencia nos lleva a la url de post', () => {
    const DOM = document.createElement('div');
    const navigateToMock = jest.fn();
    DOM.append(renderFeed(navigateToMock));
    const postButton = DOM.querySelector('.share-experience');
    postButton.click();
    expect(navigateToMock).toHaveBeenLastCalledWith('/post');
  });
  it('cuando se hace click en el botón de signout nos lleva a la url de login', () => {
    const DOM = document.createElement('div');
    const navigateToMock = jest.fn();
    DOM.append(renderFeed(navigateToMock));
    const signOutButton = DOM.querySelector('#signout');
    signOutButton.click();
    expect(navigateToMock).toHaveBeenLastCalledWith('/');
  });
});
