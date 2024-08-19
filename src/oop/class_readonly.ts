class UserReadOnly {
  readonly id: string = 'gh564nth65n4'
  readonly name: string = 'John Doe'
  readonly #password: string = 'password56489'
  readonly dataRegistration: Date = new Date('2021-01-01')
}

const userRead = new UserReadOnly()
console.log(userRead)
console.log(userRead.name)
// userRead.name = 'James Doe' // Cannot assign to 'name' because it is a read-only property.
