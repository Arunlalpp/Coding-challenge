function threeNPlusOne(number) {
  if (number % 2 === 0) {
    return number / 2;
  }

  return 3 * number + 1;
}

console.log(threeNPlusOne(10));

function convergentSeriesLength(maxLengthNumber) {
  const initialValue = 1;
  for (let i = maxLengthNumber; i != 1; i = threeNPlusOne(i)) {
    maxLengthNumber++;
  }

  return initialValue;
}

console.log(convergentSeriesLength(10));

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

console.log(convergentSeriesMaxLength(2, 10000000));
