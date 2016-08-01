import * as postcss from 'postcss';
import {supported} from './helpers';

export = postcss.plugin('postcss-grouper', (opts = {}) => {
	supported(opts, (e: { opt: string }) => {
		throw new Error(`[PostCSS Grouper]: The option ${e.opt} isnt right...`);
	});

	const touchNodes = [/rule/i];

	return (css) => {
		css.walk(n => {
			if (touchNodes.filter(v => { return v.test(n.type); }).length > 0) {
				const node = <postcss.Rule>n;

			}
		});
	};
});
