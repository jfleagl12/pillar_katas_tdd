//Fail test first for converter.html

//Test for toRoman function
var toRoman = require('/converter.html');

describe("toRoman()", function() {
  it("converts 1", function() {
    (toRoman(1)).toEqual('I');
  });
}); 
  
  describe("toRoman()", function() {
  it("converts 4", function() {
    (toRoman(4)).toEqual('IV');
  });
}); 

describe("toRoman()", function() {
  it("converts 5", function() {
    (toRoman(5)).toEqual('V');
  });
}); 


//Test for toDecimal function
var toDecimal = require('/converter.html');

describe("toDecimal()", function() {
  it("converts I", function() {
    (toDecimal("I")).toEqual(1);
  });
});

describe("toDecimal()", function() {
  it("converts IV", function() {
    (toDecimal("IV")).toEqual(4);
  });
});

describe("toDecimal()", function() {
  it("converts V", function() {
    (toDecimal("V")).toEqual(5);
  });
});