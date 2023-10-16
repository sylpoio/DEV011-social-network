// importamos la funcion que vamos a testear
import { createAccountFunction } from '../src/lib/auth';

describe('createAccountFunction', () => {
  it('debería ser una función', () => {
    expect(typeof createAccountFunction).toBe('function');
  });
});
