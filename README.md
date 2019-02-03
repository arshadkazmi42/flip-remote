# flip-remote :octocat:

[![Build](https://img.shields.io/travis/com/arshadkazmi42/flip-remote.svg)](https://travis-ci.com/arshadkazmi42/flip-remote/)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/flip-remote.svg)](https://github.com/arshadkazmi42/flip-remote)
[![LICENSE](https://img.shields.io/npm/l/flip-remote.svg)](https://github.com/arshadkazmi42/flip-remote/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/flip-remote.svg)](https://www.npmjs.com/package/flip-remote)
[![NPM Version](https://img.shields.io/npm/v/flip-remote.svg)](https://www.npmjs.com/package/flip-remote)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/flip-remote.svg)](https://github.com/arshadkazmi42/flip-remote/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/flip-remote.svg)](https://github.com/arshadkazmi42/flip-remote/commits/master)

This cli tool switches the http or https remote url to ssh url and vice versa inside git config.

It loads the git config from `.git/config` and checks what type of remote url its using (http, https or ssh).

If its using, http or https it will switch it to ssh and if its using ssh it will change it to https. 

> Give us a :star: if you like our work :heart:

## Install

```
$ npm i -g flip-remote
```

> This should be installed globally

## Usage

- Navigate to a root directory of any github repository in you local machine and run the below command

```javascript
$ flipremote

// Output
// ✔ Github Remote Flipped
```

## Contributing

We are constantly working on improving this library and we need all the help we can get. 

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/flip-remote/issues/new), fixing [open issues](https://github.com/arshadkazmi42/flip-remote/issues) or by implementing a new feature. 

Read our contributing [guide](CONTRIBUTING.md) on getting started with contribution
