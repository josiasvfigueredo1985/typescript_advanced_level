/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
function returnFirstPosition<TAnyArray>(arr: TAnyArray[]): TAnyArray {
  return arr[0]
}

console.log(returnFirstPosition([1, 2, 3, 4, 5]))
console.log(returnFirstPosition(['a', 'b', 'c', 'd', 'e']))
