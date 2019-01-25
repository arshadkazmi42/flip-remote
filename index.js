#!/usr/bin/env node

const logSymbols = require('log-symbols');

const {
  constants,
  read,
  write
} = require('./lib');


const flip = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await read(currentPath);

    const httpsPathRegex = new RegExp(constants.httpsPath, 'i');
    const sshPathRegex = new RegExp(constants.sshPath, 'i');

    // If it contains httpsPath
    if (httpsPathRegex.test(configContent)) {

      // Replace https url with ssh
      configContent = configContent.replace(constants.httpsPath, constants.sshPath);  
    } else if (sshPathRegex.test(configContent)) {

      // Replace ssh url with https
      configContent = configContent.replace(constants.sshPath, constants.httpsPath);
    } else {

      // If does not contains either ssh/https path
      console.log(logSymbols.info, 'Config does not contains remote');
      return;
    }

    // Writting updated config
    await write(currentPath, configContent);

  } catch (err) {

    console.log(logSymbols.error, err);
  }
}


// Triggering flip with current path
flip(process.cwd());
