'use strict';
const ansiRegex = require('ansi-regex');
const replaceStream = require('replacestream');

module.exports = () => replaceStream(ansiRegex(), '');
