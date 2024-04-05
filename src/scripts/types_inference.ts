const userInfo = ['1', 'John', 'new Date()'] // Infered as an tuple

console.log(typeof userInfo)

userInfo.push('Test', '5', 'new Date(22, 2, 2024)') // Allowed
const user = userInfo.map((inf) => {
  console.log(inf)
  return inf
})
const user222 = userInfo.map((inf) => inf.replace('Test', '3'))
console.log(user222)

console.log(user)
