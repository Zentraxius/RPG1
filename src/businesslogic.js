// export function pingPong(goal) { // pingPong is the name used for importing, it brings the function effect over

export class AddCharacter {
  constructor (totalScore, turnScore) {
    this.totalScore = totalScore;
    this.turnScore = turnScore;
  }
//   diceRoll() {
//     let rollValue = Math.floor(Math.random() * 10) + 1;
//     if (rollValue === 1) {
//       this.turnScore = 0;
//     } else {
//       this.turnScore += rollValue;
//     }
//     return rollValue;
//   }
//   calculateTotalScore() {
//     this.totalScore += this.turnScore;
//     this.turnScore = 0;
//     return this.totalScore;
//   }
//   checkForWinner() {
//     if (this.turnScore + this.totalScore >= 100) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }


export class Character {
  constructor (strength, intelligence, speed) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
  }
  marine() {
    this.strength = 8;
    this.intelligence = 3;
    this.speed = 5;
  }   
  scientist() {
    this.strength = 3;
    this.intelligence = 10;
    this.speed = 3;
  }   
  scout() {
    this.strength = 4;
    this.intelligence = 5;
    this.speed = 7;
  }   
}

export class Encounter {
  constructor (sandworm, mob, treasure, princess) {    
    if (Encounter.includes(sandworm)) {
      this.turnScore -= 20;
    } else if (Encounter.includes(mob)) {
      this.turnScore -= 50;
    } else if (Encounter.includes(treasure)) {
      this.turnScore += 50;
    } else if (Encounter.includes(princess)) {
      this.turnScore += 100;
    } else {
      return totalScore;
    }
    
  }
}



//   let output = [];
//   for (let i=1; i<=goal; i++) {
//     if (i%15===0) {
//       output.push("ping-pong");
//     } else if (i%3===0) {
//       output.push("ping");
//     } else if (i%5===0) {
//       output.push("pong");
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }


export function charClassNamer(name) {
  if (name === "classMarine") {
    let userClass2 = "Marine";
    return userClass2;
  } else if (name === "classScientist") {
    let userClass2 = "Scientist";
    return userClass2;
  } else {
    let userClass2 = "Scout";
    return userClass2;
  }
}