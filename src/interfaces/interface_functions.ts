/* eslint-disable @typescript-eslint/no-magic-numbers */
interface ISum {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (initial: number, ...nums: number[]): number
}

const sum1: ISum = (initial: number = 0, ...nums: number[]): number => {
  return nums.reduce((sum, num) => sum + num, initial)
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
console.log(sum1(1, 2, 3, 4))

interface ICalcs {
  // Functions are already defined here...
  sum: (n1: number, n2: number) => number
  sub: (n1: number, n2: number) => number
  mult: (n1: number, n2: number) => number
  div: (n1: number, n2: number) => number
}

const calculator: ICalcs = {
  // So here there's no need to define as arrow function again
  // (property) ICalcs.sum: (n1: number, n2: number) => number
  sum(n1, n2) {
    return n1 + n2
  },
  sub(n1, n2) {
    return n1 - n2
  },
  mult(n1, n2) {
    return n1 * n
  },
  div(n1, n2) {
    return n1 / n2
  },
}

console.log(calculator.sum(1, 2)) // 3
