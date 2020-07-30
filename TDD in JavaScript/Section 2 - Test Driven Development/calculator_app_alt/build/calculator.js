class Calculator {
   constructor() {};

   sum(val1, val2) {
      return val1 + val2;
   };

   subtract(val1, val2) {
      return val1 - val2;
   };

   multiply(val1, val2) {
      return val1 * val2;
   };

   divide(val1, val2) {
      return val1 / val2;
   };
};

module.exports = Calculator;