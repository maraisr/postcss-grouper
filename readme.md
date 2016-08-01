PostCSS Grouper
===============

[![NPM version](https://img.shields.io/npm/v/postcss-grouper.svg?style=flat-square)](https://www.npmjs.com/package/postcss-grouper)

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

<table>
  <thead>
    <tr>
      <th>Before</th>
      <th>After</th>
  <tbody>
    <tr>
      <td>
        <div class="highlight highlight-source-css">
<pre>
html { color: black; }
.foo { color: white; }
html { margin-top: 10px; }
</pre>
        </div>
      </td>
      <td>
        <div class="highlight highlight-source-css">
<pre>
html { color: black; }
html { margin-top: 10px; }
.foo { color: white; }
</pre>
        </div>
      </td>
    </tr>
  </tbody>
</table>
