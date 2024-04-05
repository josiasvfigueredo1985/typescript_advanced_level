console.log('Hello world! This is my first TypeScript code!')

const users = 'John'
console.log('Hello ' + users + '!. Welcome!')

class Products implements IProduct {
  name: string
  value: number

  constructor(productName: string, productValue: number) {
    this.name = productName
    this.value = productValue
  }
}
interface IProduct {
  name: string
  value: number
}
const i = 1000
const prices = [i ** i, i ** i, i]
const products = [new Products('Playstation 5', prices[0])]
products.push(new Products('Playstation 2', prices[1]))
products.push(new Products('Playstation 1', prices[2]))
console.log(products)
products.forEach((product) => {
  console.log(product)
})
products.every((product) => (product.value += 110))
products.forEach((product) => {
  console.log(product)
})
