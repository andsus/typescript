/*
class HandShake {
  private code: number
  private handshakes: string[] = []
  private messageMap: Map<number, ()=>void> = new Map([
      [1, ():void=>{this.handshakes.push("wink")}],
      [2, ():void=>{this.handshakes.push("double blink")}],
      [3, ():void=>{this.handshakes.push("close your eyes")}],
      [4, ():void=>{this.handshakes.push("jump")}],
      [5, ():void=>{this.handshakes.reverse()}]
  ]);

  constructor(readonly code: number) {
      this.code = code
  }

  public commands(): string[] {
      const binaryArray = (this.code >>> 0).toString(2).split("").reverse();
      binaryArray.forEach((item, index) => {
          if (item === '1') {
              this.messageMap.get(index+1)?.apply(this)
          }
      })
      return this.handshakes;
  }
}

export default HandShake;
*/
export default class HandShake {
    constructor(readonly code: number) { }

    public commands(): string[] {
        let result = [];
        if (this.code & 1) result.push('wink');
        if (this.code & 2) result.push('double blink');
        if (this.code & 4) result.push('close your eyes');
        if (this.code & 8) result.push('jump');
        if (this.code & 16) result.reverse();

        return result;
    }
}