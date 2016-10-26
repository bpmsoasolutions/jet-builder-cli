'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ dev

var dev = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var args;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = process.argv.slice(4, process.argv.length);
                        _context.next = 3;
                        return (0, _index2.default)(_index.serve, 'src --es6 --scss ' + (args[0] ? args[0] : ''));

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function dev() {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = dev;
//# sourceMappingURL=dev.js.map