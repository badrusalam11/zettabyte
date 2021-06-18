// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  arr1 = [7, 3, ...arr1];
  arr1 = [...arr1, 4,8];
  return arr1;
}

console.log(result(arr1, arr2));

// server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.render('hello.ejs', { final_result: "final" } );
});
app.listen(3000);