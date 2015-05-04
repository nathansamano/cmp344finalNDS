/* Nathan Samano
 * CMP344 Final Exam
 * JavaScript 101 #3
 * API of add, subtract, multiply, and divide operations
 * run with node
 */

(function (exports) {

  var math = (function() {

    function add(a,b) {
      return a + b;
    }

    function subtract(a,b) {
      return a - b;
    }  

    function multiply(a,b) {
      return a * b;
    }

    function divide(a,b) {
      return a / b;
    }

    return function(a,b,op) {
      var answer;
      if (op === 'add')
        answer = add(a,b);
      else if (op === 'subtract')
        answer = subtract(a,b);
      else if (op === 'multiply')
        answer = multiply(a,b);
      else if (op === 'divide')
        answer = divide(a,b);
      else return "invalid argument";

      return answer;
    };

  }());

  exports.math = math;

})(typeof window === 'undefined' ? module.exports : window);
