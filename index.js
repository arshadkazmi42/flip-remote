#!/usr/bin/env node

const logSymbols = require('log-symbols');
const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');

const { GH_PATH } = require('@gh-conf/gh-conf-constants');


const flip = async (currentPath) => {

  try {

    // Read config file content
    let configContent = await readConf(currentPath);

    const httpsPathRegex = new RegExp(GH_PATH.HTTP_REGEX_PATH, 'i');
    const sshPathRegex = new RegExp(GH_PATH.SSH_PATH, 'i');

    if (httpsPathRegex.test(configContent)) { // If it contains http or https path

      // Replace http or https url with ssh
      configContent = configContent.replace(httpsPathRegex, GH_PATH.SSH_PATH);
    } else if (sshPathRegex.test(configContent)) {

      // Replace ssh url with https
      configContent = configContent.replace(GH_PATH.SSH_PATH, GH_PATH.HTTPS_PATH);
    } else {

      // If does not contains either ssh/https path
      console.log(logSymbols.info, 'Config does not contains remote');
      return;
    }

    // Writting updated config
    await writeConf(currentPath, configContent);

    // Logging success message with a tick mark
    console.log(logSymbols.success, 'Github Remote Flipped');

  } catch (err) {

    console.log(logSymbols.error, err);
  }
};


// Triggering flip with current path
flip(process.cwd());
