import { Character } from './../src/businesslogic.js';

describe('Character', () => {

  test('should determine if the Character constructor method variables have value.')
    let Character = new Character([10], [10], [10])
    expect(Character).toEqual([10], [10], [10])
});