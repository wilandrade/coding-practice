const insertIntoSortedArray = (arr, item) => {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  arr.push(item);
  if (arr.length < 2) return;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < item) {
      break;
    } else {
      swap(arr, i, i + 1);
    }
  }
};

const mergeSorted = function (arr1, arr2) {

  const result = [];

  if (Array.isArray(arr1)) {
    arr1.forEach((item) => {
      insertIntoSortedArray(result, item);
    });
  }

  if (Array.isArray(arr2)) {
    arr2.forEach((item) => {
      insertIntoSortedArray(result, item);
    });
  }

  return result;
};
