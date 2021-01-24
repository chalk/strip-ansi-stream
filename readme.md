# strip-ansi-stream

> Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code)

## Install

```
$ npm install strip-ansi-stream
```

## Usage

```js
import stripAnsiStream from 'strip-ansi-stream';

const stream = stripAnsiStream();

stream.on('data', data => {
	console.log(data);
	//=> 'Unicorn'
	//=> 'bar'
})

stream.write('\u001B[4mUnicorn\u001B[0m');
stream.end('\u001B[0;33;49;3;9;4mbar\u001B[0m');
```

## API

### stripAnsiStream()

Returns a [`Transform` stream](https://nodejs.org/api/stream.html#stream_class_stream_transform) that strips ANSI escape codes.

## Related

- [strip-ansi](https://github.com/chalk/strip-ansi) - Non-streaming version of this module
- [has-ansi](https://github.com/chalk/has-ansi) - Check if a string has ANSI escape codes
- [ansi-regex](https://github.com/chalk/ansi-regex) - Regular expression for matching ANSI escape codes
- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
