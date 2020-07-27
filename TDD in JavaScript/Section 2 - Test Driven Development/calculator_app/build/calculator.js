var Calculator = function() {
   this.sum = function(val1, val2) {
      val1 + val2;
   };

   this.subtract = function(val1, val2) {
      val1 - val2;
   };

   this.multiply = function(val1, val2) {
      val1 * val2;
   };

   this.divide = function(val1, val2) {
      val1 / val2;
   };
};

module.exports = {
   sum: function(val1, val2) {
      return val1 + val2;
   },
   subtract: function(val1, val2) {
      return val1 - val2;
   },
   multiply: function(val1, val2) {
      return val1 * val2;
   },
   divide: function(val1, val2) {
      return val1 / val2;
   }
};