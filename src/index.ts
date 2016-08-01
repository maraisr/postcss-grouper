import * as postcss from 'postcss';

interface OptsInterface {
	group?: Array<RegExp>;
}

export = postcss.plugin('postcss-grouper', (opts: OptsInterface = {}) => {
	const touchNodes = [/rule/i];

	return (css) => {
		// Object containing all matched nodes to then be grouped
		let found: { [name: string]: Array<postcss.Rule> } = {};

		css.walk(n => {
			if (touchNodes.filter(v => { return v.test(n.type); }).length > 0) {
				const node = <postcss.Rule>n;

				if (opts.group) {
					opts.group.forEach(v => {
						if (v.test(node.selector)) {
							let matchee: string = (v.exec(node.selector))[0];

							// Appends this node to the found object to then be grouped
							found[matchee] = ((t: any) => {
								return t.push(node), t;
							})(found[matchee] || []);
						}
					});
				}
			}
		});

		// Loops through all props and moves rules to the first one found
		for (let x in found) {
			let done: Array<postcss.Rule> = [found[x][0]];
			let counter = 1;

			while (done.length < found[x].length) {
				found[x][counter].moveAfter(done[done.length - 1]);
				done.push(found[x][counter]);
				++counter;
			}
		}
	};
});
