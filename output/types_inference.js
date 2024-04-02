"use strict";
var userInfo = [1, 'John', new Date()];
console.log(typeof userInfo);
userInfo.push('Test', 22, new Date(22, 2, 2024));
userInfo.map(function (info) { return console.log(info); });
//# sourceMappingURL=types_inference.js.map