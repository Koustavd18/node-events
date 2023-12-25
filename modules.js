const c1 = require("./test-module-1");

const calc = new c1();

console.log(calc.add(10, 5));

const calc1 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");

console.log(calc1.divide(10, 2));

console.log(add(30, 10));

require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
