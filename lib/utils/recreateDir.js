'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var recreateDir = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        args.forEach(function (dir) {
                            _shelljs2.default.rm('-rf', dir);
                            _shelljs2.default.mkdir(dir);
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function recreateDir(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = recreateDir;
//# sourceMappingURL=recreateDir.js.map