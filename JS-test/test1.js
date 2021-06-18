// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  var sum = 0;
  for(var i=0; i < input.length; i++){
    sum += parseInt(input[i]);
}
return sum;
}

console.log(result(input));

// server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.render('hello.ejs', { final_result: "final" } );
});
app.listen(3000);

