const assert = require("assert");

assert.strictEqual(capitalizeFirstLetters("i am learning tdd"), 'I Am Learning Tdd');

assert.strictEqual(capitalizeFirstLetters.length,1);

assert.strictEqual(capitalizeFirstLetters(''),'');