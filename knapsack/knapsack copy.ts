type Item = {
  weight: number
  value: number
}


type Specification = {
  maximumWeight: number;
  items: Item[];
};
type Result = [maxValue: number, select: () => Item[]];

const hasOwnProperty = Object.prototype.hasOwnProperty;
function knapsack({ maximumWeight, items }: Specification): Result {

  const maxItemIndex = items.length - 1;
  const totalCapacity = maximumWeight;

  const memo: number[] = [];
  return [value(maxItemIndex, totalCapacity), select];
  function value(itemIndex: number, capacity: number): number {

    if (itemIndex < 0 || capacity <= 0) return 0;
    const key = totalCapacity * itemIndex + (capacity - 1);

    if (hasOwnProperty.call(memo, key)) return memo[key];
    return (memo[key] = calculateValue(itemIndex, capacity));

  }
  function calculateValue(itemIndex: number, capacity: number): number {
    const { weight: itemCost, value: itemValue } = items[itemIndex];
    const vPrevious = value(itemIndex - 1, capacity);

    if (itemCost > capacity) return vPrevious;
    const vCombined = value(itemIndex - 1, capacity - itemCost) + itemValue;

    return vCombined > vPrevious ? vCombined : vPrevious;
  }
  function select(): Item[] {

    const bag: Item[] = [];
    for (let i = maxItemIndex, capacity = totalCapacity; i >= 0; i -= 1) {
      if (value(i, capacity) <= value(i - 1, capacity)) continue;
      const item = items[i];
      capacity -= item.weight;
      bag.push(item);
    }

    return bag;
  }

}
const maximumValue: (s: Specification) => number = (spec) => knapsack(spec)[0];
export { knapsack, maximumValue };

