"use strict";
console.log("Hello world! This is my first TypeScript code!");
var user = "John";
console.log("Hello " + user + "!. Welcome!");
var Products = (function () {
    function Products(productName, productValue) {
        this.name = productName;
        this.value = productValue;
    }
    return Products;
}());
var products = [new Products('Playstation 5', 5000)];
products.push(new Products('Playstation 2', 1000));
products.push(new Products('Playstation 1', 300));
console.log(products);
products.every(function (product) { return product.value += 100; });
products.forEach(function (product) { return console.log(product); });
//# sourceMappingURL=first_code.js.map