const { override, addBabelPlugin } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');

module.exports = override(
	addBabelPlugin([
		'babel-plugin-root-import',
		{ rootPathSuffix: 'src', rootPathPrefix: '$' }
	]),
	rewireReactHotLoader()
);
