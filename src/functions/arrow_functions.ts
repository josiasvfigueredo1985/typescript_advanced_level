const response = '404'
// Default funtion
function returnResponse(response: string): string {
  return response
}

console.log(returnResponse(response)) // 404

const arrReturnResponse = (resp: string): string => {
  return resp
}
console.log(arrReturnResponse(response)) // 404

const printAnything = (values: any): any => {
  console.log(values)
}
printAnything(1) // 1
printAnything('1') // 1
printAnything(new Date()) //  current date
