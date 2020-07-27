const Calculator = require("../build/calculator");

var assert = require("chai").assert;
var calc = require('../build/calculator.js');

describe("Calculator", function() {
   it("Sum should be 15", function() {
      assert.equal(calc.sum(10, 5), 15, 'Sum is not equal to 15');
   });

   it("Subtract should be 0", function() {
      assert.equal(calc.subtract(5, 5), 0, 'Sum is not equal to 0');
   });

   it("Multiplication should be 30", function() {
      assert.equal(calc.multiply(5, 6), 30, 'Sum is not equal to 30');
   });

   it("Division should be 2", function() {
      assert.equal(calc.divide(6, 3), 2, 'Sum is not equal to 30');
   });
});