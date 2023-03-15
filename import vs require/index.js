//The require() function is a part of the CommonJS module system used in Node.js, 
//which loads modules synchronously.
//Whereas import is part of the ES6 module system used in modern browsers and allows asynchronous loading of modules.
//require() is a function that takes a string argument specifying the module to load. 
//while import is a statement that specifies the module to load using a URL-like syntax.

//To enable the import syntax in Node.js, you need to add the "type": "module" field in the package.json file.

//example for import/export
// file1.js
export function sum(a, b) {
  return a + b;
}

// file2.js
import { sum } from './file1.js';

console.log(sum(2, 3)); // Output: 5

export function diff(a, b) {
  return a - b;
}

// file3.js
import { sum, diff } from './file2.js';

console.log(sum(2, 3)); // Output: 5
console.log(diff(2, 3)); // Output: -1

// note that i didn't add "type": "module" in the jswon file because i dont have one

//example for node.js fs

import fs from 'fs';

fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});


