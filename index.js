#!/usr/bin/env node

const {
  constants,
  read,
  write
} = require('./lib');


const flip = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await read(currentPath);

    // Replace https url with ssh
    configContent = configContent.replace(constants.httpsPath, constants.sshPath);

    // Writting updated config
    await write(currentPath, configContent);

  } catch (err) {

    console.log(err);
  }
}


// Triggering flip with current path
flip(process.cwd());
