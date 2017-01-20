'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var fontAwesome = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(css, output) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _index2.default)(_index.copyFolders, 'src/bower_modules/font-awesome/fonts ' + output + '/assets/fonts');

                    case 2:
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                            var faCss = _fs2.default.readFileSync('src/bower_modules/font-awesome/css/font-awesome.css', 'utf-8');
                            faCss = faCss.replace(/url\((')?\.\.\/fonts\//g, 'url($1assets/fonts/');

                            css += faCss;
                            resolve(css);
                        }));

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fontAwesome(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var renderSass = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(file) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', new Promise(function (resolve, reject) {
                            _nodeSass2.default.render({
                                file: file
                            }, function (err, result) {
                                if (err) {
                                    reject(err);
                                }
                                resolve(result);
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function renderSass(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var assets = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(args) {
        var output, minize, bowerModules, css;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        output = args[0] ? args[0] : 'temp';
                        minize = args.indexOf('-m') > -1;
                        bowerModules = args.indexOf('--bower-modules') > -1;

                        //Parse scss
                        //let css = shell.exec(`${sassPwd} ${path.resolve('src/scss/styles.scss')}`)

                        _context3.next = 6;
                        return renderSass(_path2.default.resolve('src/scss/styles.scss'));

                    case 6:
                        css = _context3.sent;

                        if (!bowerModules) {
                            _context3.next = 11;
                            break;
                        }

                        _context3.next = 10;
                        return fontAwesome(css, output);

                    case 10:
                        css = _context3.sent;

                    case 11:

                        if (minize) {
                            _shelljs2.default.ShellString(css).exec(_index.uglifyPwd).to(output + '/styles.css');
                        } else {
                            _shelljs2.default.ShellString(css).to(output + '/styles.css');
                        }

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function assets(_x4) {
        return _ref3.apply(this, arguments);
    };
}();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = assets;
//# sourceMappingURL=assets.js.map