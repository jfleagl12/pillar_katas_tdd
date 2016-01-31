var num = prompt("Please type in any number or roman numeral");


//Need toRoman function for converting decimal to roman numeral
var converter = function(num) {
// 2 arrays for roman and decimal values
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
if(num == valueOf(decimalValue)){
    var decimal = '';   
 
 for (var i = 0; i < romanNumeral.length; i++) {
  while (romanNumeral[i] <= num) {
      decimal += decimalValue[i];
      num -= romanNumeral[i];
    }
  }
  return alert(decimal);
} else {
//Variable to store empty string
var romanized = '';
    
// Next step Loops through the indices of the decimalValue array.
  for (var i = 0; i < decimalValue.length; i++) {
    // Continue to loop while the value at the current index will fit into num.
    while (decimalValue[i] <= num) {
      // Add the Roman numeral & decrease num by the decimal equivalent.
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
    return alert(romanized);
 }  
};
converter(num);

