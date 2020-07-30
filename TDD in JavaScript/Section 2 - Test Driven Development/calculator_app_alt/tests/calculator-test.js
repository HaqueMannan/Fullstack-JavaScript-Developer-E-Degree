var assert = require("chai").assert;
var Calculator = require("../build/calculator.js");

describe("Calculator", function() {
   before(function() {
      this.calc = new Calculator();
   });

   after(function() {
      delete this.calc;
   });

   it("Sum should be 15", function() {
      assert.equal(this.calc.sum(10, 5), 15, 'Sum is not equal to 15');
   });

   it("Subtract should be 0", function() {
      assert.equal(this.calc.subtract(5, 5), 0, 'Sum is not equal to 0');
   });

   it("Multiplication should be 30", function() {
      assert.equal(this.calc.multiply(5, 6), 30, 'Sum is not equal to 30');
   });

   it("Division should be 2", function() {
      assert.equal(this.calc.divide(6, 3), 2, 'Sum is not equal to 30');
   });
});