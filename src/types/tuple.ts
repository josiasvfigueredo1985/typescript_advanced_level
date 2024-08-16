/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let address: [string, string, number]

address = ['Fascination St.', 'London', 333]
// address = ['Fascination St.', 1, 333] // Type Error
console.log(address)

let weekDay: [string, string, string, string, string, string, string]
weekDay = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const usr = {
  name: 'User',
  age: 36,
}
let record: [object, string, number, boolean]

record = [usr, 'Test', 1, false]
// record = [usr, 'Test', 1, 1] // error
console.log(record)
