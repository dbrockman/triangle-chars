Map of 20 unicode triangle characters (U+25B2 - U+25C5).

## Installation

[![Greenkeeper badge](https://badges.greenkeeper.io/dbrockman/triangle-chars.svg)](https://greenkeeper.io/)

    npm install triangle-chars

## Usage

``` js
var triangles = require('triangle-chars');
triangles.code.UP_BLACK; // 9650
triangles.html.UP_BLACK; // "&#9650;"
var s = String.fromCharCode(triangles.code.UP_BLACK);
s === triangles.string.UP_BLACK; // true
```

## Names

* UP_BLACK
* UP_WHITE
* UP_BLACK_SMALL
* UP_WHITE_SMALL
* RIGHT_BLACK
* RIGHT_WHITE
* RIGHT_BLACK_SMALL
* RIGHT_WHITE_SMALL
* RIGHT_BLACK_POINTER
* RIGHT_WHITE_POINTER
* DOWN_BLACK
* DOWN_WHITE
* DOWN_BLACK_SMALL
* DOWN_WHITE_SMALL
* LEFT_BLACK
* LEFT_WHITE
* LEFT_BLACK_SMALL
* LEFT_WHITE_SMALL
* LEFT_BLACK_POINTER
* LEFT_WHITE_POINTER
