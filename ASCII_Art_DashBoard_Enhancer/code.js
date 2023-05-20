/**
 * @file ASCII_Art_DashBoard_Enhancer
 * Compile Lua Object Notice from a plain text file.
 */

const fs = require('fs');
const txt = fs.readFileSync('./ASCII_Art_DashBoard_Enhancer.txt', 'utf8');
let out = '';
txt.split('\n').forEach((line) => {
  out += `[[${line}]],\n`;
});

fs.writeFileSync('./ASCII_Art_DashBoard_Enhancer.txt', out);

//node code.js
