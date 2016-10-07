'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ startCordova

var startCordova = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _index2.default)(_index.cordova.clean);

                    case 2:
                        _context.next = 4;
                        return (0, _index2.default)(_index.jet, '--cordova');

                    case 4:
                        _context.next = 6;
                        return (0, _index2.default)(_index.cordova.add, 'android browser');

                    case 6:
                        _context.next = 8;
                        return (0, _index2.default)(_index.cordova.plugins);

                    case 8:
                        _context.next = 10;
                        return (0, _index2.default)(_index.cordova.prepare);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function startCordova(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = startCordova;
//# sourceMappingURL=startCordova.js.map