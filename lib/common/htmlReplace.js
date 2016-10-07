'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ htmlReplace [cordova or empty]

var htmlReplace = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var text, output, cordova, production;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        text = index;
                        output = args[0] ? args[0] : 'temp';
                        cordova = args.indexOf('--cordova') > -1;
                        production = args.indexOf('--production') > -1;


                        if (cordova) {
                            text = (0, _utils.textReplace)('<!-- cordovaJs -->', null, '<script type="text/javascript" charset="utf-8" src="cordova.js"></script>', text);
                        } else {
                            text = (0, _utils.textReplace)('<!-- cordovaJs -->', null, '', text);
                        }

                        if (production) {
                            text = (0, _utils.textReplace)('<!-- startCss -->', '<!-- endCss -->', '<link rel="stylesheet" href="styles.css" type="text/css" />', text);
                            text = (0, _utils.textReplace)('<!-- startJs -->', '<!-- endJs -->', '<script type="text/javascript" charset="utf-8" src="scripts.js"></script>', text);
                        }

                        text = (0, _utils.textReplace)('<!-- altaCss -->', null, '<link rel="stylesheet" href="oj-alta.css" type="text/css" />', text);

                        _fs2.default.writeFileSync(_path2.default.join(output, 'index.html'), text, { encoding: 'utf-8' });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function htmlReplace(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../utils/_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var index = _fs2.default.readFileSync(_path2.default.join('src', 'index.html'), 'utf-8');exports.default = htmlReplace;
//# sourceMappingURL=htmlReplace.js.map