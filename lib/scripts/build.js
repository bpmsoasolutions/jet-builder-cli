'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ build

var build = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _index2.default)(_index.recreateDir, 'temp dist');

                    case 2:
                        _context.next = 4;
                        return (0, _index2.default)(_index.jet);

                    case 4:
                        _context.next = 6;
                        return (0, _index2.default)(assets, 'temp -m --bower-modules');

                    case 6:
                        _context.next = 8;
                        return (0, _index2.default)(_index.components, 'temp');

                    case 8:
                        _context.next = 10;
                        return (0, _index2.default)(_index.htmlReplace, 'temp --production');

                    case 10:
                        _context.next = 12;
                        return (0, _index2.default)(_index.rjsOptimizer);

                    case 12:
                        _context.next = 14;
                        return (0, _index2.default)(_index.copy, '-rf src/assets dist');

                    case 14:
                        _context.next = 16;
                        return (0, _index2.default)(_index.copy, '-rf temp/index.html dist');

                    case 16:
                        _context.next = 18;
                        return (0, _index2.default)(_index.copy, '-rf temp/scripts.js dist');

                    case 18:
                        _context.next = 20;
                        return (0, _index2.default)(_index.copy, '-rf temp/styles.css dist');

                    case 20:
                        _context.next = 22;
                        return (0, _index2.default)(_index.clean, 'temp');

                    case 22:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function build(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = build;
//# sourceMappingURL=build.js.map