let isAdmin: boolean = true

// isAdmin = 1 // error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
isAdmin = false

isAdmin = Boolean(1)
console.log(isAdmin) // true
isAdmin = Boolean('1')
console.log(isAdmin) // true
isAdmin = Boolean('0')
console.log(isAdmin) // true

isAdmin = Boolean(0)
console.log(isAdmin) // false
isAdmin = Boolean('')
console.log(isAdmin) // false
isAdmin = Boolean(+'0')
console.log(isAdmin) // false
