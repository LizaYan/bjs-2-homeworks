function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      sum = sum + arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
      sum = sum + arr[i];
    } else {
      sum = sum + arr[i];
    }
  }
  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2))
  return { min: min, max: max, avg: avg }; 
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) { sum = sum + arr[i] }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let a = Math.max(...arr);
  let b = Math.min(...arr);
  let difference = 0;
  if (arr.length > 0) { difference = a - b }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      } 
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
        average = sumEvenElement / countEvenElement;
      }
    }
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i])
    if ((func(...arrOfArr[i])) > maxWorkerResult) {
      maxWorkerResult = func(...arrOfArr[i])
    }
  }
  return maxWorkerResult;
}
