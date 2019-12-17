// **QUICK SORT*****************************************************************
// Like merge sort, exploits the fact that arrays of 0 or 1 are always sorted
// Works by selecting one number (the "pivot"), and finding the index where the
// pivot should end up in the sorted array. Picks any index, and moves values
// either to the left or right of the pivot, depending on if it's greater than
// or less than pivot's value.

// "Pivot helper" or "partition"
// Its useful to create a function responsible for rearranging elements in an
// array on either side of the pivot. Helper function should designate pivot.
// Array should be rearranged so all values less than the pivot are placed to
// the left and values greater than the pivot are placed on the right. The order
// of the elements on the left or right doesn't matter. Helper should do this
// IN PLACE, not create a new array. Index of the pivot should be returned at
// the end.
//1. Should accept 3 arguments:
  // - An array
  // - Start index (0)
  // - End index (arr.length - 1)
//2. Store current pivot index in a variable
//3. Loop...
  // - If the pivot is greater than the current element, increment the pivot
  // index variable, and then swap the current element with the element at the
  // pivot index.
// 4. Swap the starting element (i.e. pivot) with the pivot index.
// 5. Return the pivot index.


// **MERGE SORT*****************************************************************
// In order to implement merge sort, it's useful to first create a function that
// merges two sorted arrays. This helper function should also return a sorted
// array of all elements of previous 2 arrays:
// function merge(arr1, arr2) {
  // create an empty array, take a look at smallest values of input arrays
  let results = []
  let i = 0
  let j = 0
  // while there are still values we havent looked at...
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      // 1. if the value in the first array is smaller than the value in ther
      // second array, push the value from the first array into the results, and
      // move onto the NEXT value in the first array
      results.push(arr1[i])
      i++
    } else {
      // 2. if the value in the first array is LARGER than the value in the
      // second array, push the value of the second array into the results, and
      // move onto the next value in the second array
      results.push(arr2[j])
      j++
    }
  }
      // 3. Once we exhaust one array, push all remaining values from the other
      // array.
  while(i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}
// console.log(merge([1,10,50], [2,14,99,100]))

// mergeSort pseudocode:
let nums = [10,24,76,73,72,1,9]
function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // 1. Break up array in halves until you have 1 element or empty arrays. It is
    // recommended to use .slice()
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  // 2. With smaller arrays, use merge function until you return the full length
    // of the initial array
  return merge(left, right)
}
console.log(mergeSort(nums));
