const assert = require("assert");

function capitalizeFirstLetters(input) {
  if (input.length > 0) {
    return input
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  } else {
    return "";
  }
}

assert.strictEqual(
  capitalizeFirstLetters("i am learning tdd"),
  "I Am Learning Tdd"
);

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters(""), "");
