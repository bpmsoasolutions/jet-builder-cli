'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var plugins = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var pluginPath, plugins;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        pluginPath = _path2.default.resolve('app/plugins/fetch.json');
                        plugins = require(pluginPath);


                        _shelljs2.default.cd('app');

                        // Loop in plugins
                        Object.keys(plugins).map(function (key) {
                            var plugin = plugins[key];
                            var id = plugin.source.id ? plugin.source.id : plugin.source.url;
                            var variables = '';

                            // Manage variables
                            if (plugin.variables && Object.keys(plugin.variables).length > 0) {
                                variables += '--variable';
                                Object.keys(plugin.variables).map(function (key) {
                                    variables += ' ' + key + '=' + plugin.variables[key];
                                });
                            }

                            _shelljs2.default.exec(_path2.default.resolve(_index.pwd, 'node_modules/.bin/cordova') + ' plugin add ' + id + ' ' + variables);
                        });

                        _shelljs2.default.cd('..');

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function plugins() {
        return _ref.apply(this, arguments);
    };
}();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = plugins;
//# sourceMappingURL=plugins.js.map