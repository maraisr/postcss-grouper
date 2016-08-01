import postcss from 'postcss';
import test from 'ava';
import fs from 'fs';

import plugin from '../dist';

const run = (() => {
	const filesCache = fs.readdirSync('./types/').map(v => {
		return {
			file: v,
			io: [
				fs.readFileSync(`./types/${v}/input.css`, 'utf8'),
				fs.readFileSync(`./types/${v}/output.css`, 'utf8')
			]
		}
	});

	return function (t, type, opts) {
		let thisTest = void 0,
			source = void 0,
			dest = void 0;

		if (/[a-z][\/]+/.test(type)) {
			thisTest = filesCache.filter(v => { return v.file == /([a-z])\//.exec(type)[1] })[0];
			source = thisTest.io[0];
			dest = thisTest.io[0];
		} else {
			thisTest = filesCache.filter(v => { return v.file == type })[0];
			source = thisTest.io[0];
			dest = thisTest.io[1];
		}

		return postcss([plugin(opts)])
			.process(source)
			.then(res => {
				t.deepEqual(res.css, dest);
				t.deepEqual(res.warnings().length, 0);
			});
	}
})();

test('groups with single regex', t => {
	return run(t, 'a', { group: [/html/] });
});

test('no options, no grouping', t => {
	return run(t, 'a/input');
});
