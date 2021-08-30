type DnaType = Record<string, string>

const dnaMap: DnaType = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}
// class Transcriptor {

//   toRna(dna: string): string {
//     if (!/^[GCAT]+$/.test(dna)) { // catch invalid DNA first
//       throw new Error('Invalid input DNA.')
//     }
//     // use spread operator
//     return [...dna].map( ch => dnaMap[ch] ).join("")
//   }
// }


function invalidInput() {
  throw new Error('Invalid input DNA.')
}

export class Transcriptor {
  public toRna(sequence: string): string {
    return [...sequence]
      .map( ch => dnaMap[ch]  || invalidInput())
      .join("")
  
  }
}


export default Transcriptor
