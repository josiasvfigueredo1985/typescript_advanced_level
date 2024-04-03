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

const products = [new Products('Playstation 5', 5000)]
products.push(new Products('Playstation 2', 1000))
products.push(new Products('Playstation 1', 300))
console.log(products)
products.forEach((product) => console.log(product))
products.every((product) => (product.value += 110))
products.forEach((product) => console.log(product))
