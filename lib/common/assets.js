'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var fontAwesome = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(css, output) {
        var faCss;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return run(copyFolders, 'src/bower_modules/font-awesome/fonts ' + output + '/fonts');

                    case 2:
                        faCss = fs.readFileSync('src/bower_modules/font-awesome/css/font-awesome.css', 'utf-8');

                        faCss = faCss.replace(/url\((')?\.\.\/fonts\//g, 'url($1fonts/');

                        css += faCss;

                    case 5:
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

var assets = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(args) {
        var output, minize, bowerModules, css;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        output = args[0] ? args[0] : 'temp';
                        minize = args.indexOf('-m') > -1;
                        bowerModules = args.indexOf('--bower-modules') > -1;

                        //Parse scss

                        css = _shelljs2.default.exec(_index.sassPwd + ' ' + _path2.default.resolve('src/scss/styles.scss'), { silent: true });

                        //Join css and other assets bower_module tasks

                        if (!bowerModules) {
                            _context2.next = 8;
                            break;
                        }

                        _context2.next = 8;
                        return fontAwesome(css, output);

                    case 8:

                        if (minize) {
                            _shelljs2.default.ShellString(css).exec(_index.uglifyPwd, { silent: true }).to(output + '/styles.css');
                        } else {
                            _shelljs2.default.ShellString(css).to(output + '/styles.css');
                        }

                    case 9:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function assets(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = assets;
//# sourceMappingURL=assets.js.map