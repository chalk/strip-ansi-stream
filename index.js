import ansiRegex from 'ansi-regex';
import replaceStream from 'replacestream';

export default function stripAnsiStream() {
	return replaceStream(ansiRegex(), '');
}
