/*jshint esversion: 6 */
function expect(actual) {
  return {
    toEqual: function(expected) {
      // compare 'actual' and 'expected' strictly
      if (actual === expected) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    },  // note use of comma to separate functions

    toBeAnArray: function() {
      // checks if 'actual' is an array
      if (actual.constructor.name === "Array") {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    },

    isTrue: function() {
      // compare 'actual' and 'expected'
      if (actual === true) {
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
