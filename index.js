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

  console.log(temp);
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
