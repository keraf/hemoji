# Hemoji
## Turn a string into a visual hash made of emojis ⏮️ 📁 👾 🍐

Hemoji is a small library to turn strings into a hash of emojis. Just like hashes, two identical strings passed through Hemoji will produce the same result. 

This library is not intended to replace traditional hashing functions as collision are more likely, due to the reduced amount of different emojis available (depending on the length). On the other hand, it does provide more possibilities than alphanumeric characters for its length, making it more convenient to compare two pieces of information where it would not be possible to do so programmatically. Examples would include oral confirmation between two people or self confirmation in separate contexts (for example: hardware <-> software | software A <-> Software B).

You can try Hemoji online or continue reading on how to use it.

_This is inspired by Telegram's [emoji key verification feature](https://telegram.org/blog/calls#secure) on calls._

## Getting started
Install the library using NPM:
```
npm i --save hemoji
```

Or Yarn:
```
yarn add hemoji
```

The library exports a single function (as default):
```javaScript
import hemoji from 'hemoji';
// OR
const hemoji = require('hemoji');
```

And use it!
```javaScript
console.log(hemoji('hemoji')); // 🕶️ 🉑 🇼 🛵 🥘 🟡
console.log(hemoji('Hello world', { length: 8 })); // 🆕 ⛴️ 😠 🚾 🗳️ ⚪ 💀 😢
console.log(hemoji('Hello world', { length: 4 })); // 🚍 😌 🌏 🈯
```

The first parameter is the string you wish to hash. The second (optional) parameter is an options object.

### Options
| Name | Type | Description | Default Value |
| --- | --- | --- | --- |
| version | 'v1' | Version of emoji set (based on `versions.json`) | 'v1' |
| length | number | Number of emojis to display in the result | 6 |
| spacer | string | Spacing character for the result | ' ' (space) |


## How does it work?
1. The input string gets hashed to SHA-256.
2. The hashed result gets split into a few chunks.
3. The emoji index array is calculated from the chunk using a modulo of the emoji index array of the decimal value of the chunk.
4. The result of each chunk is concatenated and returned.

## Other languages
There are no other implementation of Hemoji as of yet. If you implemented it in a different language, please let me know and I will add it here.

Please note that implementation in other languages have to produce the same result as this library. Refer to the `versions.json` file for the exact list of emojis this library is using as well as the unit tests to verify the results.

## License
This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).
