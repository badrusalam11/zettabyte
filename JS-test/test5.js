// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  var binary = Number(num).toString(2);
  return binary;
}

console.log(result(number));