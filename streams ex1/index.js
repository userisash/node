const fs = require('fs');
const { Transform } = require('stream');

const inputFilePath = 'hello.tst';
const outputFilePath = 'output.txt';

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk.toString().toUpperCase();
    callback(null, upperCaseChunk);
  }
});

const inputStream = fs.createReadStream(inputFilePath);
const outputStream = fs.createWriteStream(outputFilePath);

inputStream.pipe(upperCaseTransform).pipe(outputStream);

outputStream.on('finish', () => {
  console.log(`Successfully transformed data and saved it to ${outputFilePath}`);
});
