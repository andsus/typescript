type Array2D = number[][]
class Matrix {

  rows: Array2D
  columns: Array2D
  constructor(readonly matrixString: string) {
    this.rows = matrixString
      .split("\n")
      .map( (rowString) => 
        rowString 
          .split(/\s+/)
          .map((s) => Number(s))
      )

      this.columns = this.rows[0]
          .map( (_, idx) => 
            this.rows.map(row => row[idx])
          )
  }


}

export default Matrix
