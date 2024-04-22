const path = require('path');
const { ESLINT_MODES, addAfterLoader, removeLoaders, loaderByName, getLoaders, throwUnexpectedConfigError } = require('@craco/craco');

const aliases = (prefix = `src`) => ({
    '@kaboom': `./node_modules/kaboom/dist/kaboom.mjs`,
});

// a prefix alias could be added
// example: aliases('src')
const aliasesObj = aliases();
const resolveAliases = Object.fromEntries(
    Object.entries(aliasesObj)
    .map(([key, val]) => [key, path.resolve(__dirname, val)])
);


const throwError = (message) =>
    throwUnexpectedConfigError({
        packageName: 'craco',
        githubRepo: 'gsoft-inc/craco',
        message,
        githubIssueQuery: 'webpack',
    });

module.exports = {
    webpack: {
        alias: resolveAliases
    },
    eslint: {
        mode: ESLINT_MODES.file
    },
    configure: (webpackConfig, { paths }) => {
        const { hasFoundAny, matches } = getLoaders(webpackConfig, loaderByName('babel-loader'));
        if (!hasFoundAny) throwError('failed to find babel-loader');

        console.log('removing babel-loader');
        const { hasRemovedAny, removedCount } = removeLoaders(webpackConfig, loaderByName('babel-loader'));
        if (!hasRemovedAny) throwError('no babel-loader to remove');
        if (removedCount !== 2) throwError('had expected to remove 2 babel loader instances');

        console.log('adding ts-loader');

        const tsLoader = {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('ts-loader'),
            options: { transpileOnly: true },
        };

        const { isAdded: tsLoaderIsAdded } = addAfterLoader(webpackConfig, loaderByName('url-loader'), tsLoader);
        if (!tsLoaderIsAdded) throwError('failed to add ts-loader');
        console.log('added ts-loader');

        console.log('adding non-application JS babel-loader back');
        const { isAdded: babelLoaderIsAdded } = addAfterLoader(
            webpackConfig,
            loaderByName('ts-loader'),
            matches[1].loader // babel-loader
        );
        if (!babelLoaderIsAdded) throwError('failed to add back babel-loader for non-application JS');
        console.log('added non-application JS babel-loader back');

        return webpackConfig;
    }
};