function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const table = [23, 12, 5, 9, 45]
swap(table, 1, 3)
console.log(table)