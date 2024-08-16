let company: string
company = 'Microsoft Corporation'
console.log(company) // Simple string

const firstName: string = 'John'
const lastName: string = 'Doe'
const fullName: string = firstName + ' ' + lastName
console.log(fullName) // String concatenated

const str1: string = 'Hello, '
const str2: string = 'World!'
const result: string = str1.concat(str2)
console.log(result) // Concat method

company = 'Google'
console.log(`Company is: ${company}`) // String interpolation

const multiLineString: string = `This is a
multiline string
in TypeScript.`
console.log(multiLineString)
