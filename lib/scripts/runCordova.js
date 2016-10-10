'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ devCordova

var runCordova = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _index2.default)(_devCordova2.default);

                    case 2:
                        _context.next = 4;
                        return (0, _index2.default)(_index.cordova.build, 'android --debug');

                    case 4:
                        _context.next = 6;
                        return (0, _index2.default)(_index.cordova.run, 'android');

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function runCordova(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _devCordova = require('./devCordova');

var _devCordova2 = _interopRequireDefault(_devCordova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = runCordova;
//# sourceMappingURL=runCordova.js.map