import test from 'ava';
import getStream from 'get-stream';
import stripAnsiStream from './index.js';

test('strip color from string', async t => {
	const stream = stripAnsiStream();
	stream.end('\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m');
	const data = await getStream(stream);
	t.is(data, 'foofoo');
});

test('strip color using two chunks', async t => {
	const stream = stripAnsiStream();
	stream.write('\u001B[0m\u001B[4m\u001B[42m\u001B[');
	stream.end('31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m');
	const data = await getStream(stream);
	t.is(data, 'foofoo');
});
