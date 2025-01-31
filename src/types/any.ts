// Avoid using this type on Typescript

let value // Automatically inferred as any, same as "let value: any"
console.log(typeof value); // undefined
value = "John Smith"
console.log(typeof value) // string
value = 1
console.log(typeof value) // number
value = true
console.log(typeof value) // boolean
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
value = [1, 2, 3, 4, 5]
console.log(typeof value) // object
value = { name: 'John', ahe: 35 }
console.log(typeof value) // object
