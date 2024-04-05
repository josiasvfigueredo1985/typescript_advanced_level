const userInfo = ['1', 'John', 'new Date()'] // Infered as an tuple

console.log(typeof userInfo)

userInfo.push('Test', '5', 'new Date(22, 2, 2024)') // Allowed
const user1 = userInfo.map(inf => {
  console.log(inf)
  return inf
})
console.log(user1)
