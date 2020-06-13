var sampleObject = {
   value: 'Apple',
   doSomething: function () {} // <- remember to put a comma here if you uncomment toJSON

   // // if toJSON is defined, JSON.stringify serializes its output as opposed to the object itself
   // toJSON: function () {
   //    return {
   //       value: this.value,
   //       additional: 'property'
   //    };
   // }
};

console.log('\nDefault behavior:');
console.log(JSON.stringify(sampleObject));

console.log('\nReplacer function argument:');
console.log(JSON.stringify(
   sampleObject,
   function replacer (key, value) {
      if(typeof value === 'string') {
         return value.toUpperCase();
      };
      return value;
   }
));

console.log('\nSpacer argument:');
console.log(JSON.stringify(
   sampleObject,
   null, // replacer ignored if null
   2 // also allows strings
));

console.log('\nSerialize and deserializing...');
var serializedJson = JSON.stringify(sampleObject);
var deserializedJson = JSON.parse(serializedJson);
var deserializedWithReviver = JSON.parse(
   serializedJson,
   function reviver (key, value) {
      if (typeof value === 'string') {
         return value.toLowerCase();
      };
      return value;
   }
);

console.log('\nAnd the value property is:');
console.log(deserializedJson.value);

console.log('\nIf a reviver function made everything lowercase, it\'s:');
console.log(deserializedWithReviver.value);