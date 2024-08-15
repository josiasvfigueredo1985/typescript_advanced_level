enum Permission {
  ADMIN,
  USER,
  READONLY,
}

console.log(Permission.ADMIN) // 0
console.log(Permission.USER) // 1
console.log(Permission.READONLY) // 2
console.log(Permission.ADMIN.valueOf()) // 0
console.log(Permission.USER.valueOf()) // 1
console.log(Permission.READONLY.valueOf()) // 2

enum PermissionNumber {
  ADMIN = 1,
  USER,
  READONLY,
}
console.log(PermissionNumber.READONLY) // 3

for (const key in PermissionNumber) {
  console.log(PermissionNumber[key])
  // Output
  // ADMIN
  // USER
  // READONLY
  // 1
  // 2
  // 3
}

enum PermissionString {
  ADMIN = 'Administrator',
  USER = 'User',
  READONLY = 'Readonly User',
}

// eslint-disable-next-line @typescript-eslint/dot-notation
console.log(PermissionString['USER']) // User
console.log(PermissionString.USER) // User

for (const key in PermissionString) {
  console.log(key)
  // Output
  // ADMIN
  // USER
  // READONLY
}

// Loop to print the enum values
for (const value of Object.values(PermissionString)) {
  console.log(value)
  // Output
  // Administrator
  // User
  // Readonly User
}
console.log(PermissionString.ADMIN === 'Administrator') // true
