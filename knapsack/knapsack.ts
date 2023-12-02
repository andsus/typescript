type Item = {
  weight: number
  value: number
}

// maximumWeight: number, is the capacity of knapsack
// items: Item[]
export function maximumValue({ maximumWeight, items }: {
  maximumWeight: number;
  items: Item[];
}): number {
  /**
   * The m is 2D array, rows are the items and columns are knapsack weight from
   * 0 to capacity/maximum weight. 
   * Each cell in the table will contain a list of all the
   * items k that fit into the knapsack at that point:
   *
   *                   / the previous max (value at m[k-1][r])
   * m[k][r] = max of    vs
   *                   \ value of current item + value of remaining space
   *     i = k -1   ->     (items[i].value + m[i][r - items[i].weight])
   * 
   * p tracks each iteration, which item to keep or drop, not needed for this solution 
   *   but nice to have the audit trail.  
   * 
  */
  
  const n = items.length
  let m = [...Array(n+1)].map(() => Array(maximumWeight+1).fill(0))
  let p = [...Array(n+1)].map(() => Array(maximumWeight+1).fill(false))

  for (let k = 1; k < n + 1; k++) {               // k the first item
    var i = k -1                                // item under inspection
    for (let r = 1; r < maximumWeight + 1; r++) { // remaining capacity
      let drop = m[k][r] = m[k-1][r]            // drop by default
      if (items[i].weight > r)                  // too heavy ignore it
        continue
      let keep = items[i].value + m[i][r - items[i].weight] // keep
      m[k][r] = Math.max(drop, keep)            // drop or keep
      p[k][r] = keep > drop                     // did i keep ?
    }
  }
  return m[items.length][maximumWeight]
}
