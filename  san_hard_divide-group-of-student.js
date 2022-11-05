/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: "Kai", lastName: "Lyons" },
  { firstName: "Belle", lastName: "Norton" },
  { firstName: "Finnley", lastName: "Rennie" },
  { firstName: "Tatiana", lastName: "Dickerson" },
  { firstName: "Peyton", lastName: "Gardner" },
];
const groups = 3;

function result(students, groups) {
  students.sort((a, b) => {
    let fa = a.firstName,
      fb = b.firstName;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  const res = [];
  let temp = [];
  const groupSize = Math.ceil(students.length / groups);

  for (let i = 0; i < students.length; i++) {
    temp.push(students[i]);
    if (temp.length == groupSize) {
      res.push(temp);
      temp = [];
    }
    if (i === students.length - 1) {
      res.push(temp);
    }
  }

  return res;
}

console.log(result(students, groups));
