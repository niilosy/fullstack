console.log('Hello World');

// Importing the modules
const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

// Math module
const sum = math.add(10, 5);
const difference = math.subtract(10, 5);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);

// StringUtils
const upperStr = stringUtils.toUpperCase("hello");
const reversedStr = stringUtils.reverseString("world");

console.log(upperStr);
console.log(reversedStr);

// dateUtils
const currentDate = dateUtils.getCurrentDate();
const formattedDate = dateUtils.formatDate("2025-02-22");

console.log(currentDate);
console.log(formattedDate);
