const { resolve } = require('path');
const { NormalModuleReplacementPlugin } = require('webpack');
const re = /packages[\\/].+[\\/]node_modules/;
const { dependencies } = require('./package.json');

// --- hack for cra to not clear console on rebuild, just for replacement example. do not sue it!
require('react-dev-utils/clearConsole');
const clearConsole = ()=>{}
require.cache[require.resolve('react-dev-utils/clearConsole')].exports = clearConsole
// ---end hack

// this plugin covers the following cases
// 1) you are able to run main with react-dep using main's react version
// 2) you are able to develop and publish react-dep separately because react in its devDependencies
// 3) you don't need to track such overlapping dependencies (react, react-dom and etc)

module.exports = function(config) {
    config.plugins.push(
        new NormalModuleReplacementPlugin(re, function(resource) {
            // first, remove babel and other loaders paths
            const requestWithoutLoaderMeta = resource.request.split('!');
            const requestPath = requestWithoutLoaderMeta.length && requestWithoutLoaderMeta[requestWithoutLoaderMeta.length - 1];

            if (requestPath) {
                // looking for a dependency and package names
                const packagesPath = resolve(__dirname, '../') + '/';
                const requestPathRel = requestPath.replace(packagesPath, '');
                const [packageName, _, depName] = requestPathRel.split('/');

                // @example: if you want to exclude any dependencies or packages from this behavior use the following code
                // const excludeDepList = ['react-carousel'];
                // const excludePackageList = ['react-another-dep'];
                // if (dependencies[packageName] && !excludeDepList.some(dep => dep === depName) && !excludePackageList.some(pkg => pkg === packageName)) {

                // if the main package has this dependency already - just use it
                if (dependencies[packageName]) {
                    console.log('\x1b[35m%s\x1b[0m', `[REPLACEMENT]: using dependency <${depName}> from package [main] instead of [${packageName}]`);
                    resource.request = resource.request.replace(`${packageName}/node_modules/${depName}`, `main/node_modules/${depName}`)
                }
            }
        })
    );

    return config;
}