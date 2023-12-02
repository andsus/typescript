export class Bucket {
  private currentAmount = 0
  constructor(
    public name: string, 
    public size: number) {}

  get amount(): number { return this.currentAmount }
  get available(): number { return this.size - this.amount }

  isFull(): boolean { return this.amount === this.size }
  
  isEmpty(): boolean { return this.amount === 0 }

  fill(): void { this.currentAmount = this.size }

  empty(): void { this.currentAmount = 0 }

  fillInto(that: Bucket): void {
    let quantity = Math.min(this.amount, that.amount)
    this.currentAmount -= quantity
    that.currentAmount += quantity
  }
}