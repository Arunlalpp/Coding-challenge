function threeNPlusOne(number) {
  if (number % 2 === 0) {
    return number / 2;
  }

  return 3 * number + 1;
}

function convergentSeriesLength(maxLengthONumber) {
  let initialCount = 1;
  for (let i = maxLengthONumber; i != 1; i = threeNPlusOne(i)) {
    initialCount++;
  }

  return initialCount;
}

function convergentSeriesMaxLength(value1, value2) {
  let maxLength = 0;

  for (let j = value1; j <= value2; j++) {
    const temp = convergentSeriesLength(j);
    if (temp > maxLength) {
      maxLength = temp;
    }
  }

  return maxLength;
}

console.log(convergentSeriesMaxLength(2, 2));
