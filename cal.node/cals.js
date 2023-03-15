const fs = require('fs')
const Path = require('path')

fs.writeFileSync('read.txt', 'hello to node.js. ')

fs.appendFileSync('read.txt', ' \nhello to node.js again.')

fs.copyFile('read.txt', 'copy.txt', (err) =>{
    if(err){
        console.log('not found')
    }else{
        console.log('new file')
    }
})

fs.rename('copy.txt', 'renamed.txt', (err) => {
    if(err){
        console.log('error')
    }else{
        console.log('file renamed')
    }
})

getCurrentFilenames();


function getCurrentFilenames() {
    console.log("Current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file);
    });
  }