// function showMessage(params) {
//   // Parameter 'params' implicitly has an 'any' type.
//   console.log(params)
// }

// function showMessage(message: string) {
//   // Missing return type on function.
//   console.log(message)
// }
const message = 'Hello world'

function showMessage(params: string): void {
  console.log(params)
}
showMessage(message) // Hello world

function showMessage2(params: string): string {
  return params
}
console.log(showMessage2(message)) // Hello world

function showMessage3(params: string): boolean {
  return params === 'Hello world'
}
console.log(showMessage3(message)) // true

function showMessage4(params: string): boolean | string {
  return params === 'Hello world!' ? true : 'Wrong message'
}
console.log(showMessage4(message + '!')) // true
console.log(showMessage4(message)) // Wrong message

function showMessage5(params: string | number): void {
  console.log(params)
}
showMessage5(message) // Hello world
showMessage5(1) // 1

function showMessage6(params: string | number): boolean | string {
  const isNumber = typeof params === 'number'
  return isNumber ? true : 'Not a number'
}
console.log(showMessage6(message)) // Not a number
console.log(showMessage6(1)) // true
