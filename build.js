const fs = require('fs');
const path = require('path');
const { minify } = require('uglify-js');

const inputFile = 'app.js';
const outputFile = 'dist/app.min.js';

const inputFilePath = path.join(__dirname, inputFile);
const outputFilePath = path.join(__dirname, outputFile);

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error while reading input file:', err);
    return;
  }

  const minifiedCode = minify(data);
  fs.writeFile(outputFilePath, minifiedCode.code, (err) => {
    if (err) {
      console.error('Error while writing output file:', err);
    } else {
      console.log('Build successful!');
    }
  });
});
