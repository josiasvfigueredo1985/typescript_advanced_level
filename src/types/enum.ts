enum EPermission {
  ADMIN,
  USER,
  READONLY,
}

console.log(EPermission.ADMIN) // 0
console.log(EPermission.USER) // 1
console.log(EPermission.READONLY) // 2
console.log(EPermission.ADMIN.valueOf()) // 0
console.log(EPermission.USER.valueOf()) // 1
console.log(EPermission.READONLY.valueOf()) // 2

enum EPermissionNumber {
  ADMIN = 1,
  USER,
  READONLY,
}
console.log(EPermissionNumber.READONLY) // 3

for (const key in EPermissionNumber) {
  console.log(EPermissionNumber[key])
  // Output
  // ADMIN
  // USER
  // READONLY
  // 1
  // 2
  // 3
}

enum EPermissionString {
  ADMIN = 'Administrator',
  USER = 'User',
  READONLY = 'Readonly User',
}

// eslint-disable-next-line @typescript-eslint/dot-notation
console.log(EPermissionString['USER']) // User
console.log(EPermissionString.USER) // User

for (const key in EPermissionString) {
  console.log(key)
  // Output
  // ADMIN
  // USER
  // READONLY
}

// Loop to print the enum values
for (const value of Object.values(EPermissionString)) {
  console.log(value)
  // Output
  // Administrator
  // User
  // Readonly User
}
console.log((EPermissionString.ADMIN as string) === 'Administrator') // true
