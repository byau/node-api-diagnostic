// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You can verify your script is working by running `grunt test`.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];
let lines =[];
let sum = 0;

let main = (file) => {
  //read contents and break them into array with each line
  fs.readFile(inFile, 'utf8', function(err, contents){
      if (err) {
        return console.error(err);
      }
      lines = (contents.split('\n').length - 1);
    });

  //go thru lines with check if number, if yes add to sum
  for (let i = 0; i<lines.length; i++){
      if (parseInt(lines[i],10)){
        sum += parseInt(lines[i],10);
      }
  }

  return sum;
};

main(inFile);

module.exports = main;
