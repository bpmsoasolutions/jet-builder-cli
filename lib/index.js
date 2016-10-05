'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cordova = exports.common = exports.utils = undefined;

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

var _componentes = require('./common/componentes');

var _componentes2 = _interopRequireDefault(_componentes);

var _htmlReplace = require('./common/htmlReplace');

var _htmlReplace2 = _interopRequireDefault(_htmlReplace);

var _jet = require('./common/jet');

var _jet2 = _interopRequireDefault(_jet);

var _rjsOptimizer = require('./common/rjsOptimizer');

var _rjsOptimizer2 = _interopRequireDefault(_rjsOptimizer);

var _serve = require('./common/serve');

var _serve2 = _interopRequireDefault(_serve);

var _add = require('./common/add');

var _add2 = _interopRequireDefault(_add);

var _compile = require('./common/compile');

var _compile2 = _interopRequireDefault(_compile);

var _plugins = require('./common/plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _prepare = require('./common/prepare');

var _prepare2 = _interopRequireDefault(_prepare);

var _ripple = require('./common/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _run = require('./common/run');

var _run2 = _interopRequireDefault(_run);

var _run3 = require('./run');

var _run4 = _interopRequireDefault(_run3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = exports.utils = {
    recreateDir: _recreateDir2.default,
    copyByFound: _copyByFound2.default,
    copyFolders: _copyFolders2.default,
    copy: _copy2.default,
    clean: _clean2.default
};

var common = exports.common = {
    assets: _assets2.default,
    componentes: _componentes2.default,
    htmlReplace: _htmlReplace2.default,
    jet: _jet2.default,
    rjsOptimizer: _rjsOptimizer2.default,
    serve: _serve2.default
};

var cordova = exports.cordova = {
    add: _add2.default,
    clean: _clean2.default,
    compile: _compile2.default,
    plugins: _plugins2.default,
    prepare: _prepare2.default,
    ripple: _ripple2.default,
    runC: _run2.default,
    serve: _serve2.default
};

exports.default = {
    run: _run4.default
};
//# sourceMappingURL=index.js.map