'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ devCordova

var webCordova = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        if (!args.indexOf('production')) {
                            _context.next = 6;
                            break;
                        }

                        _context.next = 4;
                        return (0, _index2.default)(_prodCordova2.default);

                    case 4:
                        _context.next = 8;
                        break;

                    case 6:
                        _context.next = 8;
                        return (0, _index2.default)(_devCordova2.default);

                    case 8:
                        _context.next = 10;
                        return (0, _index2.default)(_index.cordova.build, 'browser');

                    case 10:
                        _context.next = 12;
                        return (0, _index2.default)(_index.cordova.run, 'browser');

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function webCordova(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _devCordova = require('./devCordova');

var _devCordova2 = _interopRequireDefault(_devCordova);

var _prodCordova = require('./prodCordova');

var _prodCordova2 = _interopRequireDefault(_prodCordova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = webCordova;
//# sourceMappingURL=webCordova.js.map