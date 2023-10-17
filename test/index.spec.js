// importamos la funcion que vamos a testear
import { createAccountFunction } from '../src/lib/auth';

jest.mock('../src/lib/auth', () => ({
  createAccountFunction: jest.fn(() => Promise.resolve()),
}));

describe('createAccountFunction', () => {
  it('debería ser una función', () => {
    expect(typeof createAccountFunction).toBe('function');
  });
});
