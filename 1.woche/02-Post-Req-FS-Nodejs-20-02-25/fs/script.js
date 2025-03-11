import fs from 'fs';

fs.writeFileSync('test.txt', 'Hello World');
//fs.writeFileSync('test.js', 'Hello World', 'utf-8');

console.log(fs.readFileSync('test.txt', 'utf-8'));