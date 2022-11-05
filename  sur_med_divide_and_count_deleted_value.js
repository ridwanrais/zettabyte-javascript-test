/**
 * Direction:
 * - combine the data between numbersOne and numberTwo and get the deleted data between originalData and the result of merge
 * - divide the data between total value of numbersOne and numbersTwo that already merge, and total value of deletedData
 *
 * Expected Result:
 * 2.21
 */

// NOTE: Apologies for getting the answer wrong. I'm still struggling to fully grasp how the logic flow works so that the expected resulti is 2.21

let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9];

function result(originalData, numbersOne, numbersTwo) {
  const mergedArr = numbersOne.concat(numbersTwo);

  const deletedData = [];
  for (let i = 0; i < originalData.length; i++) {
    if (!mergedArr.includes(originalData[i])) {
      deletedData.push(originalData[i]);
    }
  }

  return (
    mergedArr.reduce((a, b) => a + b) / deletedData.reduce((a, b) => a + b)
  );
}

console.log(result(originalData, numbersOne, numbersTwo));
