// **FIBONACCI******************************************************************
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
// console.log(fib(7));


// **RECURSIVE RANGE************************************************************
// function recursiveRange(num) {
//   if(num == 1) return 1
//   let result = num
//   return result + recursiveRange(num - 1)
// }

// function recursiveRange(x){
//    if (x === 0 ) return 0;
//    return x + recursiveRange(x-1);
// }
// console.log(recursiveRange(10));

// **PRODUCT OF ARRAY*********maybe not recursion?******************************
// function productOfArray(arr) {
//   if(arr.length == 1) return arr[0]
//   let result = arr[0]
//
//   function helper(input) {
//     for(let i = 0; i < input.length; i++) {
//       result = result * input[i]
//     }
//   }
//
//   helper(arr)
//   return result
// }

// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1,2,3,10]));

// **BASE/EXPONENT**************************************************************
// function power(base, exponent) {
//   if(exponent == 1) return base
//   if(exponent == 0) return 1
//   return base * power(base, exponent - 1)
// }
// console.log(power(5, 3));

// **PURE RECURSION*************************************************************
// accepts array [1,2,3,4,5]
// function collectOdds(arr) {
//   // define a new array to be empty
//   let newArr = []
//
//   // check if the array argument is empty (in this case it's not)
//   if(arr.length == 0) {
//     return newArr
//   }
//
//   // push (number 1) into new array
//   // newArr = [1]
//   if(arr[0] % 2 != 0){
//     newArr.push(arr[0])
//   }
//
//   // reassign newArr to:
//   // [1].concat(collectOdds([2,3,4,5])
//   newArr = newArr.concat(collectOdds(arr.slice(1)))
//   return newArr
// }
// console.log(collectOdds([1,2,3,4,5]));

// **HELPERS********************************************************************
// function collectOdds(nums) {
//   let result = []
//
//   function helper(helperInput) {
//     if(helperInput.length == 0){
//       return
//     }
//     if(helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }
//     helper(helperInput.slice(1))
//   }
//   helper(nums)
//   return result
// }

// **FACTORIAL******************************************************************
// function factorial(num) {
//   if(num == 1) return 1
//   return num * factorial(num - 1)
// }
// console.log(factorial(5));

// **SUM RANGE******************************************************************
// function sumRange(num) {
//   if(num == 1) return 1
//   return num + sumRange(num - 1)
// }
// console.log(sumRange(3));
// // return 3 + sumRange(2)
// // return 3 +  return 2 + sumRange(1)
// // return 3 + return 2 + return 1
// // return 3 + return 2 + 1
// // return 3 + 3
// // returns 6

// function countDown(num) {
//   if(num <= 0) {
//     console.log("All done!")
//     return
//   }
//   console.log(num)
//   num--
//   countDown(num)
// }
// console.log(countDown(17));
