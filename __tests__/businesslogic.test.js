import { Character } from './../src/businesslogic.js';

describe('Character', () => {
  let reusableCharacter = new Character(10, 10, 10)

  test('should determine if the Character constructor method variables have value.', () => {
    expect(reusableCharacter.strength).toEqual(10);
    expect(reusableCharacter.intelligence).toEqual(10);
    expect(reusableCharacter.speed).toEqual(10);
  });

});