const fs = require('fs')
const CONSTANTS = require('./constants');


const write = (currentPath, content) => {
  
  return new Promise((resolve, reject) => {

    fs.writeFile(`${currentPath}${CONSTANTS.configPath}`, content, 'utf8', function (err) {
      if (err) {
        console.log(err);
        reject('Unable to flip remote');
      }

      console.log(`Github Remote Flipped`);
      resolve(true);
    });
  });
};

module.exports = write;
