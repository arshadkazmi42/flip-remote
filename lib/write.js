const fs = require('fs')
const CONSTANTS = require('./constants');


const write = (currentPath, content) => {
  
  return new Promise((resolve, reject) => {

    fs.writeFile(`${currentPath}${CONSTANTS.configPath}`, content, 'utf8', function (err) {
      if (err) {
        console.log('2', err);
        reject('Unable to flip config');
      }

      console.log(`Config flipped from ${CONSTANTS.httpsPath} to ${CONSTANTS.sshPath}`);
      resolve(true);
    });
  });
};

module.exports = write;
