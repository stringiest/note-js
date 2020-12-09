var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(a, b) {
    if (a !== b) {
      throw new Error("Assertion failed: " + a + " is not equal to" + b);
    }
  }
};

function expect(actual) {
  return {
    toEqual: function(expected) {
      // compare 'actual' and 'expected'
      if (actual === expected) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    },  // note use of comma to separate functions

    toTripleEqual: function(expected) {
      // compare 'actual' and 'expected' strictly
      if (actual === expected) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    },

    toBeAnArray: function() {
      // checks if 'actual' is an array
      if (actual.constructor.name === "Array") {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
    // can put a further function in here
  };
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}
