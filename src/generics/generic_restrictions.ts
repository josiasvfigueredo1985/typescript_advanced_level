/* eslint-disable @typescript-eslint/no-magic-numbers */
interface IData {
  length: number
}
// using interface to provide a specific property from a generic type allows to handle different types of data
// as long it does have specified property
function showTotalQuantity<T extends IData>(value: T): T {
  console.log(`Total is ${value.length}`)
  return value
}

// console.log(showTotalQuantity(1)) // Argument of type 'number' is not assignable to parameter of type 'IData'.ts(2345)
console.log(showTotalQuantity([1, 2, 3])) // Array.length
console.log(showTotalQuantity('This is a string')) // String.length
console.log(showTotalQuantity({ name: 'Item 1', length: 5 })) // Object.length

interface IManagers {
  accessID: number
}

function checkUserAccess<U extends IManagers>(user: U): U {
  console.log(`Access ID: ${user.accessID}`)
  return user
}

checkUserAccess({ name: 'John', role: 'DB ADM', accessID: 23545646 })
