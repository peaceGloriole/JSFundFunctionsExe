function addAndSubtract(num1, num2, num3) {
  // arrow functions
let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;

let resultSum = sum(num1, num2);
let finalSum = subtract(resultSum, num3);
console.log(finalSum);

// another method but it throws arror in Judge, works in vscode;

//   let resultSum = sum(num1, num2);
//   let finalSum = substract(resultSum, num3);

//   console.log(finalSum);

//   function sum(num1, num2) {
//     return num1 + num2;
//   }

//   function substract(num1, num2) {
//     return num1 - num2;
//   }
}
// addAndSubtract(23,6,10);


function smallestNumber(a, b, c) {
  let minNum = Math.min(a, b, c);
  console.log(minNum);
}
// smallestNumber(2,5,3);


function charactersInRange(char1, char2) {
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);
  
  let minCode = Math.min(code1, code2);
  let maxCode = Math.max(code1, code2);

  
  printResult(minCode, maxCode);
}

function printResult(a, b) {
  let result = [];
  for (let i = a + 1; i < b; i++) {      let curChar = String.fromCharCode(i);
    result.push(curChar);
  }
  console.log(result.join(` `));
}
// charactersInRange('a','d');

function oddAndEven(num) {
  let evenSum = 0;
  let oddSum = 0;

  let numStr = num.toString();

  for (let el of numStr) {
    if (el % 2 == 0) {
      evenSum += Number(el);
    } else {
      oddSum += Number(el);
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
// oddAndEven(1000435);

function palindromeIntegers(arr) {
  // for (let el of arr) {
  //   let isPalindrome = checkIsPalindrome(el);
  //   console.log(isPalindrome);
  // }

  // function checkIsPalindrome(num) {
  //   let numStr = num.toString();
  //   let reversedNumStr = ``;

  //   for (let i = numStr.length - 1; i >= 0; i--) {
  //     let curNum = numStr[i];
  //     reversedNumStr += curNum;
  //   }

  //   let isPalindrome = numStr == reversedNumStr;
  //   return isPalindrome;                       
  // }

  for (let num of arr) {
    let reversedNumStr = num.toString().split(``).reverse().join(``);
    
    console.log(reversedNumStr == num);
  }
}
// palindromeIntegers([123,323,421,121]);