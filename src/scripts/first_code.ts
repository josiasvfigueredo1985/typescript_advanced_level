console.log('Hello world! This is my first TypeScript code!')

const user = 'John'
console.log('Hello ' + user + '!. Welcome!')

class Products implements Product {
  name: string
  value: number

  constructor(productName: string, productValue: number) {
    this.name = productName
    this.value = productValue
  }
}

interface Product {
  name: string
  value: number
}

const prices = [5000, 1000, 300]
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
