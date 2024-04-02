console.log("Hello world! This is my first TypeScript code!");
var user = "John";
console.log("Hello " + user + "!. Welcome!");
var Product = /** @class */ (function () {
    function Product(productName, productValue) {
        this.name = productName;
        this.value = productValue;
    }
    return Product;
}());
