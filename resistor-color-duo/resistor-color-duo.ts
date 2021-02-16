export class ResistorColor {
  private colors: string[];

  private static colorArr = ['black', 'brown','red','orange','yellow','green', 'blue' , 'violet','grey', 'white' ]

  constructor(colors: string[] = []) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present")
    }
    this.colors = colors;
  
  }

  // Only process first 2 colors  
  value = () : number => 10 * ResistorColor.colorArr.indexOf(this.colors[0]) 
            + ResistorColor.colorArr.indexOf(this.colors[1])   
}
