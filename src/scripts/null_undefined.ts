let connectionDB: string | null = 'mysql, 127.0.0.1, admin, admin'
console.log(connectionDB) // mysql, 127.0.0.1, admin, admin
connectionDB = null
console.log(connectionDB) // null

let userPassword
console.log(userPassword) // undefined
userPassword = undefined
console.log(userPassword) // undefined
userPassword = 'password'
console.log(userPassword) // password
userPassword = 1
console.log(userPassword) // 1

let userData: string | undefined
console.log(userData) // undefined
userData = undefined
console.log(userData) // undefined
userData = 'password'
console.log(userData) // password
// userData = 1 // Type 'number' is not assignable to type 'string'.
