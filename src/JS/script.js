// 11.Modify Array Data With Indexes
// const myArray = [18, 64, 99];
// myArray[0]=45;

// 12.Access Multi-Dimensional Arrays With Indexes
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];

//   const myData = myArray[2][1];

//13. Manipulate Arrays With push Method
//   const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// 14.Manipulate Arrays With pop Method
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
// const removedFromMyArray=myArray.pop();

// 15.Manipulate Arrays With shift Method
const removedFromMyArray = myArray.shift();

// 16.Manipulate Arrays With unshift Method
myArray.unshift(["Paul", 35]);

// 17.Shopping List
const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];

// 18.Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

//   19.Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 +param2);
  }
  functionWithArgs(1,2);

//   20.Return a Value from a Function with Return
function  timesFive(num) {
    return num * 5;
  }
  
  const answer =  timesFive(5);
