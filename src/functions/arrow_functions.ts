const response = '404'
// Default function
function returnResponse(response: string): string {
  return response
}

console.log(returnResponse(response)) // 404

// Arrow functions
const arrReturnResponse = (resp: string): string => {
  return resp
}
console.log(arrReturnResponse(response)) // 404

const printAnything = (values: unknown): void => {
  console.log(values)
}
printAnything(1) // 1
printAnything('1') // 1
printAnything(new Date()) //  current date
