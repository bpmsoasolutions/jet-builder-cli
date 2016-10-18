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
                        if (!(args.indexOf('android') > -1)) {
                            _context.next = 13;
                            break;
                        }

                        _context.next = 11;
                        return (0, _index2.default)(_index.cordova.build, 'android --debug');

                    case 11:
                        _context.next = 13;
                        return (0, _index2.default)(_index.cordova.run, 'android');

                    case 13:
                        if (!(args.indexOf('ios') > -1)) {
                            _context.next = 18;
                            break;
                        }

                        _context.next = 16;
                        return (0, _index2.default)(_index.cordova.build, 'ios --debug');

                    case 16:
                        _context.next = 18;
                        return (0, _index2.default)(_index.cordova.run, 'ios');

                    case 18:
                        if (!(args.indexOf('windows') > -1)) {
                            _context.next = 23;
                            break;
                        }

                        _context.next = 21;
                        return (0, _index2.default)(_index.cordova.build, 'windows --debug');

                    case 21:
                        _context.next = 23;
                        return (0, _index2.default)(_index.cordova.run, 'windows');

                    case 23:
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

var _prodCordova = require('./prodCordova');

var _prodCordova2 = _interopRequireDefault(_prodCordova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = runCordova;
//# sourceMappingURL=runCordova.js.map