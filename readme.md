PostCSS Grouper
===============

[![NPM version](https://img.shields.io/npm/v/postcss-grouper.svg?style=flat-square)](https://www.npmjs.com/package/postcss-grouper)
[![Travis](https://img.shields.io/travis/maraisr/postcss-grouper.svg?style=flat-square)](https://travis-ci.org/maraisr/postcss-grouper)
[![Codecov](https://img.shields.io/codecov/c/github/maraisr/postcss-grouper.svg?style=flat-square)](https://codecov.io/github/maraisr/postcss-grouper)

A plugin that'll group selectors you want together. My effort to have sexier css on the web.

## Install

```sh
npm i postcss-grouper -D
```

## Usage

```js
var postcssGrouper = require('postcss-grouper');
postcss([
	postcssGrouper({
		group: [/html/]
	})
]);
```
Input:

```css
html { color: black; }
.foo { color: white; }
html { margin-top: 10px; }
```

Output:

```css
html { color: black; }
html { margin-top: 10px; }
.foo { color: white; }
```
