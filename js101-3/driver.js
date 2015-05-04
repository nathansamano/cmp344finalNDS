/* Nathan Samano
 * CMP344 Final Exam
 * JavaScript 101 #3
 * Driver code for API
 * run with node
 */

var calc = require('./math.js').math;

console.log(calc(10,5,'add'));
// 15

console.log(calc(10,5,'subtract'));
// 5

console.log(calc(10,5,'multiply'));
// 50

console.log(calc(10,5,'divide'));
// 2
