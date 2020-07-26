var assert = require("chai").assert;

describe("Simple assert", function() {
   it("foo !== bar", function() {
      assert('foo' !== 'bar', 'foo is equal to bar');
   });
});

describe("Numeric Calculations", function() {
   it("Addition: Result should be 10", function() {
      assert.equal(5 + 5, 10);
   });

   it("Subtract: Result should be 5", function() {
      assert.equal(10 - 5, 5);
   });

   it("Less than", function() {
      assert.isBelow(2, 5, "Number is below 5");
   });
});

describe("String Manipulations", function() {
   it("String should be 'test'", function() {
      myString = "testing"
      assert.equal(myString, "test", "The string is not equal to test");
   });

   it("Variable is a data type string", function() {
      myString = "testing"
      assert.typeOf(myString, "string");
   });

   it("Length is 4'", function() {
      myString = "test"
      assert.lengthOf(myString, 4);
   });
});