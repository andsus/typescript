export default class Clock {
  private hours: number;
  private minutes: number;

  constructor(hours: number, minutes: number = 0) {
    this.hours = Math.floor(this.mod((hours * 60 + minutes) / 60.0, 24));
    this.minutes = this.mod(minutes, 60);
  }

  plus = (minutesToAdd: number) :Clock => new Clock(this.hours, this.minutes + minutesToAdd)

  minus = (minutesToSubtract: number) :Clock => this.plus(-minutesToSubtract) 

  equals = (other: Clock) :boolean => this.hours === other.hours && this.minutes === other.minutes

  toString = () :string => `${this.pad2(this.hours)}:${this.pad2(this.minutes)}`

  mod = (x: number, y: number) :number  => Math.floor(((x % y) + y) % y)

  pad2 = (n: number) :string => n.toString().padStart(2, '0')

}

