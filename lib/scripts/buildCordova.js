'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ buildCordova

var buildCordova = function () {
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
                            _context.next = 11;
                            break;
                        }

                        _context.next = 11;
                        return (0, _index2.default)(_index.cordova.build, 'android release -- --buildConfig=' + path.resolve('app/buildAndroidRelease.json'));

                    case 11:
                        if (!(args.indexOf('ios') > -1)) {
                            _context.next = 14;
                            break;
                        }

                        _context.next = 14;
                        return (0, _index2.default)(_index.cordova.build, 'ios release -- --buildConfig=' + path.resolve('app/buildIOSRelease.json'));

                    case 14:
                        if (!(args.indexOf('windows') > -1)) {
                            _context.next = 17;
                            break;
                        }

                        _context.next = 17;
                        return (0, _index2.default)(_index.cordova.build, 'windows release -- --buildConfig=' + path.resolve('app/buildWindowsRelease.json'));

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function buildCordova(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _prodCordova = require('./prodCordova');

var _prodCordova2 = _interopRequireDefault(_prodCordova);

var _devCordova = require('./devCordova');

var _devCordova2 = _interopRequireDefault(_devCordova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = buildCordova;
//# sourceMappingURL=buildCordova.js.map