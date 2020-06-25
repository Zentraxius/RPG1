// export function pingPong(goal) { // pingPong is the name used for importing, it brings the function effect over

export class Score {
  constructor (totalScore, turnScore) {
    this.totalScore = totalScore;
    this.turnScore = turnScore;
  }
  fight() {
    //have each character fight a monster. Whoever has the highest cumulative score going in/setting - monster power wins.
    // if Character.strength > Monster.strength, character wins and vice versa
    // if Character.speed > Monster.strength, character wins and vice versa
    // How do we compare arrays of character properties to determine a winner?

    // Winner array = []
    // 

    if (Character.strength > Monster.strength) {
      this.turnScore += Monster.experience();

    } else {
      this.turnScore -= 5;
    }
  }

  experience() {
    this.totalScore += this.turnScore;
    return this.totalScore;
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
  constructor (strength, intelligence, speed, experience) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.experience = experience;
  }
  marine() {
    this.strength = 8;
    this.intelligence = 3;
    this.speed = 5;
    this.experience = experience;
  }   
  scientist() {
    this.strength = 3;
    this.intelligence = 10;
    this.speed = 3;
    this.experience = experience;
  }   
  scout() {
    this.strength = 4;
    this.intelligence = 5;
    this.speed = 7;
    this.experience = experience;
  }   
}

export class Monster {
  constructor (strength, intelligence, speed, health, experience) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
    this.health = health;
    this.experience = experience;
  }
  demagorgon() {
    this.strength = 8
    this.intelligence = 9
    this.speed = 8
    this.health = 100
    this.experience = 250
// Do you dare?
  }
  sasquatch() {
    this.strength = 7
    this.speed = 4
    this.intelligence = 4
    this.health = 40
    this.experience = 75
  }
  gremlin() {
    this.strength = 3
    this.speed = 6
    this.intelligence = 2
    this.health = 5
    this.experience = 10
  }
}

export class Encounter {
  constructor (sandworm, mob, treasure, princess) {   
    this.sandworm = sandworm;
    this.mob = mob;
    this.treasure = treasure;
    this.princess = princess;
    
    // if (sandworm) {
    //   this.turnScore -= 20;
    // } else if (mob) {
    //   this.turnScore -= 50;
    // } else if (treasure) {
    //   this.turnScore += 50;
    // } else if (princess) {
    //   this.turnScore += 100;
    // } else {
    //   return this.turnScore;
    // }  
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