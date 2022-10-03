const expect = require('chai').expect;
const { readConf } = require('@gh-conf/gh-conf-read');

const { FlipRemote } = require('../lib');

const httpsPathRegex = new RegExp('https://github.com/arshadkazmi42/flip-remote', 'g');
const sshPathRegex = new RegExp('git@github.com:arshadkazmi42/flip-remote', 'g');


describe('validate flipremote', () => {
  it('flipped remote url should be present', async () => {
    let config = await readConf(process.cwd());
    await FlipRemote(process.cwd());
    let modifiedConfig = await readConf(process.cwd());

    // Flipping remote
    if (httpsPathRegex.test(config)) {
      expect(sshPathRegex.test(modifiedConfig)).to.equal(true);
    } else {
      expect(httpsPathRegex.test(modifiedConfig)).to.equal(true);
    }

    config = modifiedConfig;
    await FlipRemote(process.cwd());
    modifiedConfig = await readConf(process.cwd());

    // Flipping remote back
    if (httpsPathRegex.test(config)) {
      expect(sshPathRegex.test(modifiedConfig)).to.equal(true);
    } else {
      expect(httpsPathRegex.test(modifiedConfig)).to.equal(true);
    }
  });
});
