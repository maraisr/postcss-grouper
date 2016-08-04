import postcss from 'postcss';
import test from 'ava';
import fs from 'fs';

import plugin from '../dist';

const run = function (opts, a, b) {
	let t = this;

	return postcss([plugin(opts)])
		.process(a)
		.then(res => {
			t.deepEqual(res.css, b);
			t.deepEqual(res.warnings().length, 0);
		});
}

test('no options, then just pass through', t => {
	const io = `
html { color: black; }
.foo { color: white; }
html { margin-top: 10px; }
	`;
	return run.apply(t, [void 0, io, io]);
});

test('groups with single regex', t => {
	return run.apply(t, [{ group: [/html/] },
		`
html { color: black; }
.foo { color: white; }
html { margin-top: 10px; }
	`,
		`
html { color: black; }
html { margin-top: 10px; }
.foo { color: white; }
	`
	])
});
