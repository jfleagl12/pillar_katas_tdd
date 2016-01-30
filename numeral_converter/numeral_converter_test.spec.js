//Fail test for converter.js

//Test for toRoman function
var toRoman = require('/converter.js');

describe("toRoman()", function() {
  it("converts 1", function() {
    (toRoman(1)).toEqual('I');
  });
}); 
  
//Test for toDecimal function
var toDecimal = require('/converter.js');

describe("toDecimal()", function() {
  it("converts I", function() {
    (toDecimal("I")).toEqual(1);
  });
});