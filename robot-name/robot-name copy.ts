// export default class Robot {
//   constructor() {}

//   public get name(): string {
//     throw new Error('Implement Robot#name')
//   }

//   public resetName(): void {
//     throw new Error('Implement Robot#resetName')
//   }

//   public static releaseNames(): void {
//     throw new Error('Implement Robot.releaseNames')
//   }
// }
// export default class Robot {
//   private static generatedRobots: string[] = [];
//   private robotName = "";
//   private static totalRobot = 0;
//   constructor() {
//     this.robotName = this.generateRobot();
//     this.generateRobot();
//   }
//   generateName(): string {
//     const tempNameArray = [];
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const charactersLength = characters.length;
//     const numbersLength = numbers.length;
//     for (var i = 0; i < 2; i++) {
//       tempNameArray.push(
//         characters.charAt(Math.floor(Math.random() * charactersLength))
//       );
//     }
//     for (var i = 0; i < 3; i++) {
//       tempNameArray.push(
//         numbers.charAt(Math.floor(Math.random() * numbersLength))
//       );
//     }
//     const newRobot = tempNameArray.join("");
//     return newRobot;
//   }
//   generateRobot(): string {
//     let name = "";
//     while (true) {
//       name = this.generateName();
//       if (!Robot.generatedRobots.includes(name)) {
//         Robot.generatedRobots.push(name);
//         break;
//       }
//     }
//     return name;
//   }
//   public get name(): string {
//     return this.robotName;
//   }

//   public resetName(): void {
//     this.robotName = this.generateRobot();
//   }

//   public static releaseNames(): void {
//     Robot.generatedRobots = [];
//     // throw new Error("Implement Robot.releaseNames");
//   }
// }

/*

export default class Robot {
  private _name: string;
  constructor() { this._name = RobotNameGen.addName() }
  public get name(): string { return this._name }
  public resetName(): void { this._name = RobotNameGen.addName() }
  public static releaseNames(): void { RobotNameGen.releaseNames() }
}
// not needed for exercise, but I like it
const legalPositions = [1, 2, 3] as const
type legalPosValues = typeof legalPositions
type legalPos = legalPosValues[number]

class RobotNameGen {
  // seems a bit faster to split the lookup
  private static lownames = new Set()
  private static highnames = new Set()
  private static letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  private static genLetter(): string {
    return this.letters.charAt(Math.floor(Math.random() * this.letters.length))
  }
  private static genNumber(min: number, max: number): string {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString().padStart(3, '0')
  }
  private static genNamePart(pos: legalPos): string {
    return (pos == 1 || pos == 2) ? this.genLetter() : this.genNumber(0, 999)
  }
  private static genName(): string {
    return [1, 2, 3].reduce((buf, pos) => buf += this.genNamePart(<legalPos>pos), '')
  }
  private static isDuplicate(name: string): boolean {
    return (name.charAt(0) < 'N') ? this.lownames.has(name) : this.highnames.has(name)
  }
  private static RegisterName(name: string) {
    if (name.charAt(0) < 'N') this.lownames.add(name)
    else this.highnames.add(name)
  }
  static addName(): string {
    let temp: string = this.genName()
    while (this.isDuplicate(temp)) { temp = this.genName() }
    this.RegisterName(temp); return temp
  }
  static releaseNames() {
    this.lownames.clear(); this.highnames.clear();
  }
}
*/




/* 34s
export default class Robot {

  private MAX_COMBINATIONS = 26 * 26 * 10 * 10 * 10
  private ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  private static cachedNames: Set<string> = new Set();
  private _name: string = '';

  constructor() {
    this.resetName()
  }

  constructor1() {
    this._name =  possibleNames.pop()!
  }

  public get name(): string {
    return this._name
  }

  public resetName1(): void {
    this._name = possibleNames.pop()!
  }

  public resetName(): void {
    do{
      if (Robot.cachedNames.size > this.MAX_COMBINATIONS) {
        throw new Error("Max combinations reached");
      }
      this._name = this.generateNewName()
    }while(Robot.cachedNames.has(this._name))

    Robot.cachedNames.add(this._name)
  }

  generateNewName(): string {
    return this.randomString() + this.randomNum() + this.randomNum() + this.randomNum()
  }

  randomString(): string {
    return this.ALPHABET[Math.floor(Math.random() * 26)] + this.ALPHABET[Math.floor(Math.random() * 26)]
  }

  randomNum(): number {
    return Math.floor(Math.random() * 10)
  }

  public static releaseNames1(): void {
    possibleNames = this.generateRandomNames()
  }

  public static releaseNames(): void {
    Robot.cachedNames.clear()
  }

  public static generateRandomNames(): string[] {
    let possibleNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
         .split('')
          // create [[AA, AB, ..., AZ], ... [ ZA, ... ZX,ZY,ZZ]]
         .map((l, _, arr) => {
            return arr.map(r => '' + l + r)
          })
          // flatmap [ AA, ..., AZ, ..., ZA, ... ZZ ]
         .reduce((list, x) => list.concat(x), [])
         // create [[AA001, ..., AA999], ..., [ZZ001, ..., ZZ999]]
         .map(l => [...Array(1000).keys()]
              .map(d => d < 10 ? l + '00' + d : d < 100 ? l + '0' + d : l + d))
        // flatmap [ AA001, ..., AA999, ..., ZZ001, ..., ZZ999]
        .reduce((list, x) => list.concat(x), []);
    this.shuffleArray(possibleNames)
    return possibleNames
  }

  private static shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
let possibleNames: string[] = Robot.generateRandomNames()
*/


// const randLetter = () => String.fromCharCode(Math.round(26 * Math.random() + 65))
// const randHundred = () => Math.round(999 * Math.random()).toString()

// let usedNames: Set<string> = new Set()

// const makeName = (): string => {
//   const name = randLetter() + randLetter() + randHundred()
//   // Check uniqueness
//   if (usedNames.size >=  26 * 26 * 10 * 10 * 10) {
//     throw new Error('Out of names')
//   } else if (!usedNames.has(name)) {
//     usedNames.add(name)
//     return name
//   } else {
//     return makeName()
//   }
// }

class RobotNameGenerator {
  private static maxRobotNameSize = 26 * 26 * 10 * 10 * 10
  private static randLetter = () => String.fromCharCode(Math.round(26 * Math.random() + 65))
  private static randHundred = () => Math.round(999 * Math.random()).toString()
  public static usedNames: Set<string> = new Set()
  private static generateSerialName(): string {
    return this.randLetter() + this.randLetter() + this.randHundred()
  } 

  public static makeName(): string {
    if (this.usedNames.size >=  this.maxRobotNameSize) {
      throw new Error('Max out of names')
    }
    
    // do {
    //   this._name = this.generateSerialName()
    // } while (!this.usedNames.add(this._name))
    // return this._name
    
    // Check uniqueness
    const newName = this.generateSerialName()
    
    if (!this.usedNames.has(newName)) {
      this.usedNames.add(newName)
      return newName
    } else {
      return this.makeName()
    }
  }
}
export default class Robot {
  private _name: string

  constructor() {
    this._name = RobotNameGenerator.makeName()
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = RobotNameGenerator.makeName()
  }

  public static releaseNames(): void {
    RobotNameGenerator.usedNames = new Set()
  }
}