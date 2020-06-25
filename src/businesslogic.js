// export function pingPong(goal) { // pingPong is the name used for importing, it brings the function effect over

export class Score {
  constructor (totalScore, turnScore) {
    this.totalScore = totalScore;
    this.turnScore = turnScore;
  }
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
  constructor (strength, intelligence, speed, experience, health) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.experience = experience;
    this.health = health;
  }
  marine() {
    this.strength = 8;
    this.intelligence = 3;
    this.speed = 5;
    this.experience = experience;
    this.health = 40;
  }   
  scientist() {
    this.strength = 3;
    this.intelligence = 10;
    this.speed = 3;
    this.experience = experience;
    this.health = 10;
  }   
  scout() {
    this.strength = 4;
    this.intelligence = 5;
    this.speed = 7;
    this.experience = experience;
    this.health = 20;
  }   

  demogorgon() {
    this.strength = 8;
    this.intelligence = 9;
    this.speed = 8;
    this.health = 100;
    this.experience = 250;
    // Do you dare?
  }
  sasquatch() {
    this.strength = 7;
    this.speed = 4;
    this.intelligence = 4;
    this.health = 40;
    this.experience = 75;
  }
  gremlin() {
    this.strength = 3;
    this.speed = 6;
    this.intelligence = 2;
    this.health = 5;
    this.experience = 10;
  }
}

export class Battles {
  battleDemogorgon() {
    if (this.intelligence > demagorgon.intelligence) {
      this.health += 10;
      this.experience +=10;
    } else {
      this.health -= 10;
      this.experience -=10;
    }
  }

  battleSasquatch() {
    if (this.strength > sasquatch.strength) {
      this.health += 10;
      this.experience +=10;
    } else {
      this.health -= 10;
      this.experience -=10;
    }
  }

  battleGremlin() {
    if (this.speed > gremlin.speed) {
      this.health += 10;
      this.experience +=10;
    } else {
      this.health -= 10;
      this.experience -=10;
    }
  }
}

export class Encounter {
  constructor (sandworm, mob, treasure, princess) {   
    this.sandworm = sandworm;
    this.mob = mob;
    this.treasure = treasure;
    this.princess = princess;
  }

  wormAttack() {
    return this.turnScore -= 20;
  }
    
  mobAttack() {
    return this.turnScore -= 50;
  }
  
  findTreasure() {
    return this.turnScore += 50;
  }

  rescuePrincess() {
    return this.turnScore += 100;
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