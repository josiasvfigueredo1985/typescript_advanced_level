console.log("Hello world! This is my first TypeScript code!");

const user = "John";
console.log("Hello " + user + "!. Welcome!");
    
class Product{
    name: string;
    value: number;
    constructor(productName: string, productValue: number) {
        this.name = productName;
        this.value = productValue;
    }
}

const product = new Product('Playstation 5', 5000)
console.log(product);

