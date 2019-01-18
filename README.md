# flip-remote :octocat:

This cli tool switches the https remote url to ssh url and vice versa inside git config.

It loads the git config from `.git/config` and checks what type of remote url its using (https or ssh).

If its using, https it will switch it to ssh and if its using ssh it will change it to https. 

## Install

```
$ npm i -g flip-remote
```

> This should be installed globally

## Usage

- Navigate to a root directory of any github repository in you local machine and run the belo command

```javascript
$ flipremote

// Output
// Config flipped from https://github.com/ to git@github.com:
```

## Contributing

We are constantly working on improving this library and we need all the help we can get. 

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/flip-remote/issues/new), fixing [open issues](https://github.com/arshadkazmi42/flip-remote/issues) or by implementing a new feature. 

Read our contributing [guide](CONTRIBUTING.md) on getting started with contribution
