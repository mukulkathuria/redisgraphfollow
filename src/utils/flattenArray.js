"use strict";

function getarray(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return getarray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
}

export function getArrayValue(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getarray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
