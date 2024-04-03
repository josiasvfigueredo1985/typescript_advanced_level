const userInfo = [1, 'John', new Date()] // Infered as an tuple

console.log(typeof userInfo)

userInfo.push('Test', 22, new Date(22, 2, 2024)) // Allowed
// userInfo.push('Test 2', 23, true) // Not allowed
userInfo.map((info) => console.log(info))
