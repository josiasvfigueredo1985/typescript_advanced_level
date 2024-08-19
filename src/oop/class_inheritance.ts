// Inheritance example
class Registration {
  name: string
  birthDate: Date

  constructor(name: string, birthDate: Date) {
    this.name = name
    this.birthDate = birthDate
  }
}

class Customer extends Registration {
  email: string
  companyName: string

  constructor(
    // Constructor from child class must declare attributes from parent class
    name: string,
    birthDate: Date,
    email: string,
    companyName: string
  ) {
    // Once child constructor declared attributes, super is called first to receive child attributes
    // super is the actual constructor from parent class
    super(name, birthDate)
    this.email = email
    this.companyName = companyName
  }
}

const client1 = new Customer(
  'John',
  new Date('1987-01-01'),
  'john_1987@gmail.com',
  'John Incorporations'
)

console.log(client1)
// Output
// Customer {
//   name: 'John',
//   birthDate: 1987-01-01T00:00:00.000Z,
//   email: 'john_1987@gmail.com',
//   companyName: 'John Incorporations'
// }
