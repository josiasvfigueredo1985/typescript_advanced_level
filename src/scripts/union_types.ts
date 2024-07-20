const paymentMethod = (
  payType: 'pix' | 'deposit' | 'credit card' | 'paypal'
): string => {
  return payType
}

let payment: 'paypal' | 'credit card'
payment = 'paypal'
console.log(paymentMethod(payment))
payment = 'credit card'
console.log(paymentMethod(payment))
console.log(paymentMethod('pix'))

let pixKey: number | string
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
pixKey = 16659959
console.log(pixKey)
pixKey = 'myEmail@gmail.com'
console.log(pixKey)

const returnValue = (value: string | number): string | number => {
  return `Value is: ${value}`
}
console.log(returnValue(1)) // Value is: 1
console.log(returnValue('test')) // Value is: test
