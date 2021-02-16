export class isColors {
    private colors: string[];
  
    constructor(colors: string[] = []) {
      if (!colors ) {
        throw new Error("some text");
      }
      this.colors = colors;
    }
    value = () => this.colors.length;
  }
  
  let example = new isColors();
  