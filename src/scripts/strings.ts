// const company = "Google Inc"
// company = "Amazon" // Does not work
interface ICompany {
  name: string
}

class Company implements ICompany {
  name: string

  constructor(name: string) {
    this.name = name
    return this
  }
}

let company: string
company = 'Microsoft Corporation'
const c = new Company(company)
console.log(c) // output: Company { name: 'Microsoft Corporation' }

company = 'Google' // Does work
console.log(`Company is: ${c.name}`) // output: Company is: Microsoft Corporation
