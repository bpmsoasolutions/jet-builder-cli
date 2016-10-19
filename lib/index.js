'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serve = exports.rjsOptimizer = exports.jet = exports.htmlReplace = exports.components = exports.assets = exports.clean = exports.copy = exports.copyFolders = exports.copyByFound = exports.recreateDir = exports.sassPwd = exports.uglifyPwd = exports.babelPwd = exports.ncpPwd = exports.ripplePwd = exports.cordovaPwd = exports.pwd = exports.cordova = exports.scripts = exports.utils = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _recreateDir = require('./utils/recreateDir');

var _recreateDir2 = _interopRequireDefault(_recreateDir);

var _copyByFound = require('./utils/copyByFound');

var _copyByFound2 = _interopRequireDefault(_copyByFound);

var _copyFolders = require('./utils/copyFolders');

var _copyFolders2 = _interopRequireDefault(_copyFolders);

var _copy = require('./utils/copy');

var _copy2 = _interopRequireDefault(_copy);

var _clean = require('./utils/clean');

var _clean2 = _interopRequireDefault(_clean);

var _assets = require('./common/assets');

var _assets2 = _interopRequireDefault(_assets);

var _components = require('./common/components');

var _components2 = _interopRequireDefault(_components);

var _htmlReplace = require('./common/htmlReplace');

var _htmlReplace2 = _interopRequireDefault(_htmlReplace);

var _jet = require('./common/jet');

var _jet2 = _interopRequireDefault(_jet);

var _rjsOptimizer = require('./common/rjsOptimizer');

var _rjsOptimizer2 = _interopRequireDefault(_rjsOptimizer);

var _serve = require('./common/serve');

var _serve2 = _interopRequireDefault(_serve);

var _add = require('./cordova/add');

var _add2 = _interopRequireDefault(_add);

var _compile = require('./cordova/compile');

var _compile2 = _interopRequireDefault(_compile);

var _plugins = require('./cordova/plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _prepare = require('./cordova/prepare');

var _prepare2 = _interopRequireDefault(_prepare);

var _ripple = require('./cordova/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _build = require('./cordova/build');

var _build2 = _interopRequireDefault(_build);

var _remove = require('./cordova/remove');

var _remove2 = _interopRequireDefault(_remove);

var _run = require('./cordova/run');

var _run2 = _interopRequireDefault(_run);

var _serve3 = require('./cordova/serve');

var _serve4 = _interopRequireDefault(_serve3);

var _clean3 = require('./cordova/clean');

var _clean4 = _interopRequireDefault(_clean3);

var _build3 = require('./scripts/build');

var _build4 = _interopRequireDefault(_build3);

var _buildCordova = require('./scripts/buildCordova');

var _buildCordova2 = _interopRequireDefault(_buildCordova);

var _dev = require('./scripts/dev');

var _dev2 = _interopRequireDefault(_dev);

var _devCordova = require('./scripts/devCordova');

var _devCordova2 = _interopRequireDefault(_devCordova);

var _prodCordova = require('./scripts/prodCordova');

var _prodCordova2 = _interopRequireDefault(_prodCordova);

var _startCordova = require('./scripts/startCordova');

var _startCordova2 = _interopRequireDefault(_startCordova);

var _webCordova = require('./scripts/webCordova');

var _webCordova2 = _interopRequireDefault(_webCordova);

var _releaseCordova = require('./scripts/releaseCordova');

var _releaseCordova2 = _interopRequireDefault(_releaseCordova);

var _utils = require('./utils/_utils');

var _run3 = require('./common/run');

var _run4 = _interopRequireDefault(_run3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _run4.default;
var utils = exports.utils = {
    textReplace: _utils.textReplace
};

var scripts = exports.scripts = {
    build: _build4.default,
    buildCordova: _buildCordova2.default,
    dev: _dev2.default,
    devCordova: _devCordova2.default,
    prodCordova: _prodCordova2.default,
    startCordova: _startCordova2.default,
    webCordova: _webCordova2.default
};

var cordova = exports.cordova = {
    add: _add2.default,
    compile: _compile2.default,
    plugins: _plugins2.default,
    prepare: _prepare2.default,
    ripple: _ripple2.default,
    remove: _remove2.default,
    run: _run2.default,
    serve: _serve4.default,
    clean: _clean4.default,
    build: _build2.default
};

var pwd = exports.pwd = _path2.default.resolve('node_modules', 'jet-buildtool');

var cordovaPwd = exports.cordovaPwd = _path2.default.resolve(pwd, '../.bin/cordova');
var ripplePwd = exports.ripplePwd = _path2.default.resolve(pwd, '../.bin/ripple');
var ncpPwd = exports.ncpPwd = _path2.default.resolve(pwd, '../.bin/ncp');
var babelPwd = exports.babelPwd = _path2.default.resolve(pwd, '../.bin/babel');
var uglifyPwd = exports.uglifyPwd = _path2.default.resolve(pwd, '../.bin/uglifycss');
var sassPwd = exports.sassPwd = _path2.default.resolve(pwd, '../.bin/node-sass');

exports.recreateDir = _recreateDir2.default;
exports.copyByFound = _copyByFound2.default;
exports.copyFolders = _copyFolders2.default;
exports.copy = _copy2.default;
exports.clean = _clean2.default;
exports.assets = _assets2.default;
exports.components = _components2.default;
exports.htmlReplace = _htmlReplace2.default;
exports.jet = _jet2.default;
exports.rjsOptimizer = _rjsOptimizer2.default;
exports.serve = _serve2.default;
//# sourceMappingURL=index.js.map