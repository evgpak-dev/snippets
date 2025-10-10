```js
// Compares arrays by checking both their lengths and the equality of their elements at corresponding indices

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

arraysEqual(['foo', 'bar'], ['foo', 'bar']); // true
