const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe('capitalizeFirstLetters', () => {

  it('is a function accepting argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters , 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transform i am learning tdd correctly', () => {
    assert.strictEqual(
      capitalizeFirstLetters("i am learning tdd"),
      "I Am Learning Tdd"
    );
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });

});
