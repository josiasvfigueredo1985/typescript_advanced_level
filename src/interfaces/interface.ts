// Default object typing
let userAddress: object
// userAddress = 1 //Type 'number' is not assignable to type 'object'.
userAddress = {
  street: 'Michigan Street',
  number: 122,
}
// userAddress can receive more objects...
userAddress = { ...userAddress, city: 'New York' }
console.log(userAddress) // { street: 'Michigan Street', number: 122, city: 'New York' }
// Can be assigned to another object
userAddress = ['User Address']
console.log(userAddress) // [ 'User Address' ]
userAddress = [1]
//  This will not works because typescript can't mix two different types of objects
// userAddress = [...userAddress, 0]

// Defining object type
let adminUsers: {
  name: string
  role: string
  permissions: number
  isActive: boolean
}
// Following object will accept only the required parameters and types on the adminUsers object
// eslint-disable-next-line prefer-const
adminUsers = {
  name: 'John',
  // age: 36, // Object literal may only specify known properties,
  // and 'age' does not exist in type '{ name: string; role: string; permissions: number; isActive: boolean; }'.
  role: 'Administrator',
  permissions: 1,
  isActive: true,
}
console.log(adminUsers) // { name: 'John', role: 'Administrator', permissions: 1, isActive: true }

// Now let's use interface to define properties
// interface NewUser {} // Name patterns must be followed, otherwise this error will be thrown:
// Interface name `NewUser` must have one of the following prefixes: I

interface INewUser {
  name: string
  role: string
  permissions: number
  isActive: boolean
}

const newUser: INewUser = {
  // Now this object must have all of the properties defined in the interface
  name: 'John',
  role: 'Administrator',
  permissions: 1,
  isActive: true,
}
console.log(newUser)
