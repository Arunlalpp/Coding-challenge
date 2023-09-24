// const number = parseInt(prompt("Enter an integer"));

// for (let i = 1; i <= 10; i++) {
//   const result = i * number;

//   console.log(`${number}*${i}=${result}`);
// }

//  /* program to generate a multiplication table upto a range

const numberRange = parseInt(prompt("Enter an number"));

const maximumRage = parseInt(prompt("Enter the range"));

for (let j = 1; j <= maximumRage; j++) {
  const output = j * numberRange;

  console.log(`${numberRange} * ${j}=${output}`);
}
