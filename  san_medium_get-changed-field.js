/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: "Adi", lastName: "Nugroho", age: 25 },
  { firstName: "Deddy", lastName: "Dores", age: 25 },
];

function result(data) {
  const res = [];

  for (const property in data[0]) {
    if (data[0][property] !== data[1][property]) {
      res.push(property);
    }
  }

  return res;
}

console.log(result(data));
