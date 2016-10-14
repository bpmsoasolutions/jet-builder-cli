'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var rjsOptimizer = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var requirejsDev, bowerCfg, requirejsDevCfg, mergedPaths, includes, exclude;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        requirejsDev = _fs2.default.readFileSync(_path2.default.resolve('src/app/require.config.js'));
                        bowerCfg = JSON.parse(_fs2.default.readFileSync(_path2.default.resolve('.bowerrc')));
                        requirejsDevCfg = _vm2.default.runInNewContext(requirejsDev + '; require');
                        mergedPaths = Object.assign(_rjs.requireJsConfig.paths, requirejsDevCfg.paths);

                        Object.keys(mergedPaths).forEach(function (f) {
                            mergedPaths[f] = mergedPaths[f].replace('bower_modules', '../' + bowerCfg.directory);
                        });

                        // Includes all modules used explicity
                        // Remains the native requireJS deps that are excluded
                        includes = _rjs.requireJsConfig.include;
                        exclude = ["jqueryui-amd", "ojs", "ojtranslations"];

                        Object.keys(mergedPaths).filter(function (f) {
                            return exclude.indexOf(f) < 0;
                        }).forEach(function (f) {
                            includes.push(mergedPaths[f]);
                        });

                        _context.next = 10;
                        return optimize({
                            out: './temp/scripts.js',
                            baseUrl: './temp',
                            name: 'app/startup',
                            paths: mergedPaths,
                            include: _rjs.requireJsConfig.include,
                            insertRequire: ['app/startup'],
                            shim: requirejsDevCfg.shim,
                            bundles: {}
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function rjsOptimizer(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _requirejs = require('requirejs');

var _requirejs2 = _interopRequireDefault(_requirejs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _vm = require('vm');

var _vm2 = _interopRequireDefault(_vm);

var _rjs = require('../config/rjs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var optimize = function optimize(cfg) {
    return new Promise(function (resolve, reject) {
        cfg.output = resolve;
        try {
            _requirejs2.default.optimize(cfg, function (success) {
                console.log(success);
                resolve(success);
            }, function (err) {
                reject(err);
            });
        } catch (e) {
            reject(e);
        }
    });
};

exports.default = rjsOptimizer;
//# sourceMappingURL=rjsOptimizer.js.map