let year1: number
let year2: number
const dataYstr = 2024
// eslint-disable-next-line prefer-const
year1 = new Date().getFullYear()
// eslint-disable-next-line prefer-const
year2 = dataYstr

console.log(year1 + year2) // 4045

// convert string to number
const yearString = '2025'
const double = '4000.65'

console.log(+yearString) // 2025
console.log(parseInt(double)) // 4000
console.log(parseFloat(double)) // 4000.65

const bigInt: bigint = 50n
console.log(bigInt) // 50n
