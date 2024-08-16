let results: unknown
const n = 200
results = { success: true }
console.log(typeof results) // object
results = n
console.log(typeof results) // number
results = 'Successfully created!'
console.log(typeof results) // string

// Differences between any and unknown
const num: any = 150
const unkNum: unknown = 250
console.log(unkNum)

const n1: number = num // no errors
console.log(n1) // 150
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const n2: number = unkNum // Type 'unknown' is not assignable to type 'number'.
