// 21.Global Scope and Functions
// Declare the myGlobal variable below this line

const myGlobal=10;
function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 22Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//   23. Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
 const outerWear="sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
  
// 24.Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}


// Only change code above this line

addThree();
addFive();


// 25.Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7);

// 26.Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const vari=arr.shift();
    
    return vari;
    // Only change code above this line
  }

//   27.Understanding Boolean Values
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

//   28.Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue==true)
  return  "Yes, that was true";
  else 
  return  "No, that was false"}

//   29.Comparison with the Equality Operator
// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

//   30.Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);