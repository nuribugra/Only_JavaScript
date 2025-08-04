// CommonJS, every file is module (by default)
// Modules -- Encapsulated code (only share minimum)

const names = require('./names');
const sayHi = require('./utils');

// require('./utils');

console.log(names.name1);
console.log(names.name2);

sayHi(names.name1);
sayHi(names.name2);