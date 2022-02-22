// Median of Two Sorted Arrays
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
  //for n odd: m = (n+1/2) and for n even: m = ((n/2) + (n/2 + 1) / 2)
  let merge = nums2.concat(nums1);
  let zero = Math.max(...merge) === 0;
  if(zero){
    return console.log(0);
  }
  let sorted = merge.sort((a, b) => {
    return a - b;
  });
  let n = sorted.length;
  if (n === 1) {
    console.log(merge[0]);
  }
  if (n % 2 === 0) {
    let median = (n / 2 + (n / 2 + 1)) / 2;
    console.log(median);
  } else {
    let median = (n + 1) / 2;
    console.log(median);

  }
};

findMedianSortedArrays([2, 3], [10]);

/***********************************/
//Creating Array into 3d

let createThree = function (arr) {
  let temp = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = count + 3;

    if (
      arr[count - 3] == undefined &&
      arr[count - 2] == undefined &&
      arr[count - 1] == undefined
    ) {
      break;
    } else {
      // console.log(arr[count - 3], arr[count - 2], arr[count - 1], i);
      temp.push({
        arr1: arr[count - 3] != undefined ? arr[count - 3] : [],
        arr2: arr[count - 2] != undefined ? arr[count - 2] : [],
        arr3: arr[count - 1] != undefined ? arr[count - 1] : [],
      });
    }
  }

  // console.log(temp);
};

createThree([
  "mustafa",
  "ahmed",
  "abc",
  "slaman",
  "xyz",
  "pol",
  "sol",
  "sun",
  "moon",
  "pre",
  "rod",
  "red",
  "pink",
  "yellow",
  "purple",
  "sky",
  "brown",
  "white",
  "half",
  "uni",
  "jani",
  "feb",
  "march",
  "apr",
  "may",
]);
