const fs = require('fs');
const CONSTANTS = require('./constants');

const read = (currentPath) => {
  
  return new Promise((resolve, reject) => {

    fs.readFile(`${currentPath}${CONSTANTS.configPath}`, 'utf8', function (err, content) {
      if (err) {
        console.log(err);
        reject(`${currentPath}${CONSTANTS.configPath} not found`);
      }

      resolve(content);
    });
  });
};

module.exports = read;
