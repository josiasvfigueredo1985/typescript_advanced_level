const paymentMethod = (
  payType: 'pix' | 'deposit' | 'credit card' | 'paypal'
): string => {
  return payType
}

console.log(paymentMethod('pix'))
