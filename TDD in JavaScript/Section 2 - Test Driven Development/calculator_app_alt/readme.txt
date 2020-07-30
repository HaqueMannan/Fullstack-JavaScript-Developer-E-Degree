In terminal cd to the root of your project directory.
Enter the following terminal command to run the test file with Mocha:
npm test ./tests/calculator-test.js

Ensure the package.json file has the following script configured:
   "scripts": {
      "test": "./node_modules/mocha/bin/mocha"
   },

Use npm install to install all of the project dependencies for the calculator_app project directory.