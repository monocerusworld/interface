/* eslint-disable @typescript-eslint/no-var-requires */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const path = require("path");

const commitHash = require('child_process').execSync('git rev-parse HEAD')

module.exports = {
	babel: {
		plugins: [
			'@vanilla-extract/babel-plugin',
			['@babel/plugin-proposal-class-properties', { loose: true }],
			['@babel/plugin-proposal-private-methods', { loose: true }],
			['@babel/plugin-proposal-private-property-in-object', { loose: true }],
			['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
		],
		env: {
			test: {
				plugins: ['istanbul'],
			},
			development: {
				plugins: ['istanbul'],
			},
		},
	},
	typescript: {
		enableTypeChecking: true /* (default value) */,
	},
	jest: {
		configure(jestConfig) {
			return Object.assign({}, jestConfig, {
				transformIgnorePatterns: ['@uniswap/conedison/format', '@uniswap/conedison/provider'],
				moduleNameMapper: {
					'@uniswap/conedison/format': '@uniswap/conedison/dist/format',
					'@uniswap/conedison/provider': '@uniswap/conedison/dist/provider',
				},
			})
		},
	},
	webpack: {
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new VanillaExtractPlugin({ identifiers: 'short' }),
			new DefinePlugin({
				'process.env.REACT_APP_GIT_COMMIT_HASH': JSON.stringify(commitHash.toString()),
			}),
		],
		configure: (webpackConfig) => {
			const instanceOfMiniCssExtractPlugin = webpackConfig.plugins.find(
				(plugin) => plugin instanceof MiniCssExtractPlugin
			)
			if (instanceOfMiniCssExtractPlugin !== undefined) instanceOfMiniCssExtractPlugin.options.ignoreOrder = true

			// We're currently on Webpack 4.x that doesn't support the `exports` field in package.json.
			// See https://github.com/webpack/webpack/issues/9509.
			//
			// In case you need to add more modules, make sure to remap them to the correct path.
			//
			// Map @uniswap/conedison to its dist folder.
			// This is required because conedison uses * to redirect all imports to its dist.
			webpackConfig.resolve.alias['@uniswap/conedison'] = '@uniswap/conedison/dist'

			return webpackConfig
		},
	},
}
