import { AddCharacter } from './../src/businesslogic.js';
import { Character } from './../src/businesslogic.js';

describe('AddCharacter', () => {
  let reusableAddCharacter = new AddCharacter(30, 5)

  test('should determine the total score for a player after one round of play.', () => {
    expect(reusableAddCharacter.totalScore).toEqual();
    expect(reusableAddCharacter.turnScore).toEqual();
  });
});


describe('Character', () => {
  let reusableCharacter = new Character(10, 10, 10)

  test('should determine if the Character constructor method variables have value.', () => {
    expect(reusableCharacter.strength).toEqual(10);
    expect(reusableCharacter.intelligence).toEqual(10);
    expect(reusableCharacter.speed).toEqual(10);
  });

});

