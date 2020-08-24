// **INSERTION SORT*************************************************************
// refactor these to all be es6
nums = [2,1,9,76,4]
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}
console.log(insertionSort(nums));

// **SELECTION SORT*************************************************************
let nums = [34,22,10,19,17]
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[min]) {
        // find the index of the lowest value in the array
        min = j
      }
    }
    // swap(arr, arr[i], arr[min])
    if(i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

function swap(arr, i, min) {
  let temp = arr[i]
  arr[i] = arr[min]
  arr[min] = temp
}
console.log(selectionSort(nums));

// **BUBBLE SORT****************************************************************
let nums = [6,3,12,6,3,87,5,9]
let noSwaps = true

function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        console.log(arr, arr[j], arr[j + 1])
        swap(arr, j, j + 1)
      }
    }
    if(noSwaps) break
  }
  return arr
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
  noSwaps = false
}
console.log(bubbleSort(nums));

// **.SORT()********************************************************************
let nums = [6,7,2,4,9,12,72]
function numberCompare(a, b) {
  return a - b
}
console.log(nums.sort(numberCompare));

let words = ["Jax", "Raisins", "Juno", "Luna"]
function compareByLen(a, b) {
  return a.length - b.length
}
console.log(words.sort(compareByLen));
