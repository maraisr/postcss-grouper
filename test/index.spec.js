import postcss from 'postcss';
import test from 'ava';
import fs from 'fs';

import plugin from '../dist';

const run = (() => {
	const filesCache = ['a'].map(v => {
		return {
			file: v,
			io: [
				fs.readFileSync(`./types/${v}/input.css`, 'utf8'),
				fs.readFileSync(`./types/${v}/output.css`, 'utf8')
			]
		}
	});

	return function (t, type, opts = {}) {
		const thisTest = filesCache.filter(v => { return v.file == type })[0];

		return postcss([plugin(opts)])
			.process(thisTest.io[0])
			.then(res => {
				t.deepEqual(res.css, thisTest.io[1]);
				t.deepEqual(res.warnings().length, 0);
			});
	}
})();

test('groups with single regex', t => {
	return run(t, 'a', { group: [/html/] });
});
