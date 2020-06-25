import { AddCharacter, Monster } from './../src/businesslogic.js';
import { Character } from './../src/businesslogic.js';
import { Encounter } from './../src/businesslogic.js';
import { charClassNamer } from './../src/businesslogic.js';

// describe('AddCharacter', () => {
//   let reusableAddCharacter = new AddCharacter(30, 5)

//   test('should determine the total score for a player after one round of play.', () => {
//     expect(reusableAddCharacter.totalScore).toBeGreaterThan(30);
//     expect(reusableAddCharacter.turnScore).toBeGreaterThan(30);
//   });
// });



// describe('charClassNamer', () => {
//   let character = new charClassNamer()
//   test('should determine if the character class sidebar selection is equal to new, easy-to-read character class.', () => {
//     expect(character.userClass2).toBe(true)
//   })

// })


// describe('Encounter', () => {
//   let turnScore = 10;
//   let reusableEncounter = new Encounter(sandworm, mob, treasure, princess)

//   test('should determine turn score after one encounter.' () => )
// })

describe('Character', () => {
  let reusableCharacter = new Character(10, 10, 10)

  test('should determine if the Character constructor method variables have value.', () => {
    expect(reusableCharacter.strength).toEqual(10);
    expect(reusableCharacter.intelligence).toEqual(10);
    expect(reusableCharacter.speed).toEqual(10);
  });
  
});

describe('Monster', () => {
  let monsterTest = new Monster(5, 5, 5, 10, 25)
  test('Does this monster exist? Is he scary?', () => {
    expect(monsterTest.strength).toEqual(5);
    expect(monsterTest.intelligence).toEqual(5);
    expect(monsterTest.speed).toEqual(5);
    expect(monsterTest.health).toEqual(10);
    expect(monsterTest.experience).toEqual(25);
  });
});

// charClass = classMarine
// charClassSidebar = Marine
// take charClass and use it to generate a name for the UI
// charClassNamer takes charClass and converts it to charClassSidebar