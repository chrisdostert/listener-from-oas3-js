[![Build Status](https://travis-ci.org/chrisdostert/listener-from-oas3-js.svg?branch=master)](https://travis-ci.org/chrisdostert/listener-from-oas3-js)
[![Coverage](https://codecov.io/gh/chrisdostert/listener-from-oas3-js/branch/master/graph/badge.svg)](https://codecov.io/gh/chrisdostert/listener-from-oas3-js)

> *Be advised: this project is currently at Major version zero. Per the
> semantic versioning spec: "Major version zero (0.y.z) is for initial
> development. Anything may change at any time. The public API should
> not be considered stable."*

Javascript library which generates a native http server listener from a v3 open api spec

# Installation

## NPM
```shell
npm install --save listener-from-oas3
```

## Yarn
```shell
yarn add listener-from-oas3
```

# Examples

# Basic usage

```javascript
const getRequestListener = require('listener-from-oas3')
const http = require('http')

async function listen(port) {
  const requestListener = await getRequestListener(
    `${__dirname}/openapi.yaml`,
    // resolve handlers from `${__dirname}/${operation-path}/${operation-method}`
    __dirname
  )

  http
    .createServer(requestListener)
    .listen(port)
}
```

# Support

[open an issue](https://github.com/chrisdostert/listener-from-oas3-js/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see [CONTRIBUTING.md](CONTRIBUTING.md)
