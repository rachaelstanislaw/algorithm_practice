// **DIVIDE AND CONQUER*********************************************************
function search(arr, val) {
  let min = 0
  let max = arr.length -1

  while(min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]

    if(arr[middle] < val) {
      min = middle + 1
    } else if( arr[middle] > val) {
      min = middle -1
    } else {
      return middle
    }
  }
  // return -1
}

console.log(search([3,5,6,8,12,14,15,16,23,33], 16));

// **SLIDING WINDOW*************************************************************

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if(arr.length < num) return null
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for(let i = num; i < arr.length; i++) {
  tempSum = tempSum - arr[i - num] + arr[i]
  maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6], 3));


// // **MULTIPLE POINTERS*******************************************************
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while(left < right) {
    let sum = arr[left] + arr[right]
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum > 0) {
      right --
    } else {
      left ++
    }
  }
}

console.log(sumZero([-3, -2, -1, 3, 7, 8]));

function uniqueNums(arr) {
  if(arr.length == 0) return 0
  let left = 0
  for(right = 1; right < arr.length; right++) {
    if(arr[left] !== arr[right]){
      left++
      arr[left] = arr[right]
    }
  }
  return left + 1
}
console.log(uniqueNums([]));

// **FREQUENCY COUNTER**********************************************************
// accepts 2 arrays. return true if each array has corresponding squared value
// within array, etc.

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  // create two obj to house frequency of each array item
  let freqCount1 = {}
  let freqCount2 = {}
  // loop through 1st arr to create obj 1
  for(let val of arr1) {
    if(freqCount1[val] > 0) {
      freqCount1[val]++
    } else {
      freqCount1[val] = 1
    }
  }
  // loop through 2nd arr to create obj 2
  for(let val of arr2) {
    if(freqCount2[val] > 0) {
      freqCount2[val]++
    } else {
      freqCount2[val] = 1
    }
  }
  // check to see if frequencies match up
  for(let key in freqCount1) {
    if(!(key ** 2 in freqCount2)) {
      return false
    }
    if(freqCount2[key ** 2] !== freqCount1[key]){
      return false
    }
  }
  return true
}

console.log(same([2,3], [4,8]));

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }

  let str1Frequency = {}
  let str2Frequency = {}

  for(let i of str1) {
    str1Frequency[i] > 0 ? str1Frequency[i]++ : str1Frequency[i] = 1
  }
  for(let i of str2) {
    str2Frequency[i] > 0 ? str2Frequency[i]++ : str2Frequency[i] = 1
  }

  for(let i = 0; i< str2.length; i++) {
    let letter = str2[i]
    if(!str1Frequency[letter]){
      return false
    } else {
      str1Frequency[letter] --
    }
  }
  return true
}

console.log(validAnagram('anagram', 'nagram'));


// write function that takes in a string and returns char count of each
// alphanumeric in string

function charCount(str) {
  // create object to house results
  let result = {}
  // loop through string to check in current letter is already in object
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    // if it IS, add 1 value to that key
    if(result[char] > 0){
      result[char]++
    } else {
      // if current letter IS NOT already in object, add it and set value to 1
      result[char] = 1
    }
  }
  return result
}

console.log(charCount("hello woRrrRrld"));
