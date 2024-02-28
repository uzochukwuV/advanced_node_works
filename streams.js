const fs = require('fs');

const readStream = fs.createReadStream('large.txt');
const writeStream = fs.createWriteStream('small.txt');

readStream.on('data', (chunk)=> {
    writeStream.write(chunk);
});

readStream.on('end', ()=>{
    writeStream.end()
})