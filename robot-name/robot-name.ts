export default class Robot {
  #name: string = RobotNameGenerator.makeName() 
  constructor() {  }

  public get name(): string {
    return this.#name
  }

  public resetName(): void {
    this.#name = RobotNameGenerator.makeName()
  }

  public static releaseNames(): void {
    RobotNameGenerator.clearUsedNames()
  }
}

class RobotNameGenerator {

  private static randLetter = () => String.fromCharCode(Math.round(26 * Math.random() + 65))
  private static randHundred = () => Math.round(999 * Math.random()).toString()
  public static usedNames: Set<string> = new Set()
  private static generateSerialName(): string {
    return this.randLetter() + this.randLetter() + this.randHundred()
  } 

  public static makeName(): string {
    
    let newName = this.generateSerialName()
    
    while (this.usedNames.has(newName)) { 
      newName = this.generateSerialName() 
    }
    this.usedNames.add(newName)
    return newName
  }
  public static clearUsedNames() : void {
    this.usedNames.clear()
  }
}
