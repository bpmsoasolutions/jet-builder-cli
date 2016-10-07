'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ jetAssets [cordova]

var jetAssets = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var cordova, destination;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        cordova = args.indexOf('--cordova') > -1;
                        destination = cordova ? 'app/www' : 'dist';

                        if (!cordova) {
                            _context.next = 7;
                            break;
                        }

                        platforms.forEach(function (platform) {
                            (0, _index2.default)(_index.recreateDir, 'app/merges/' + platform.out + ' app/merges/' + platform.out + '/images app/merges/' + platform.out + '/fonts');
                            (0, _index2.default)(_index.copy, '-f ' + jetPath + '/css/' + platform.in + '/oj-alta.css app/merges/' + platform.out);
                            (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/css/' + platform.in + '/images app/merges/' + platform.out);
                            (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/css/' + platform.in + '/fonts app/merges/' + platform.out);
                        });
                        _context.next = 13;
                        break;

                    case 7:
                        _context.next = 9;
                        return (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/css/alta/fonts ' + destination);

                    case 9:
                        _context.next = 11;
                        return (0, _index2.default)(_index.copy, '-f ' + jetPath + '/css/alta/oj-alta.css ' + destination);

                    case 11:
                        _context.next = 13;
                        return (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/css/alta/images ' + destination);

                    case 13:
                        _context.next = 15;
                        return (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/css/common ' + destination);

                    case 15:
                        _context.next = 17;
                        return (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/js/libs/oj/resources ' + destination);

                    case 17:
                        _context.next = 19;
                        return (0, _index2.default)(_index.recreateDir, destination + '/ojtranslations');

                    case 19:
                        _context.next = 21;
                        return (0, _index2.default)(_index.copy, '-rf ' + jetPath + '/js/libs/oj/resources/nls ' + destination + '/ojtranslations');

                    case 21:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function jetAssets(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var platforms = [{ in: 'alta-android', out: 'android' }, { in: 'alta-ios', out: 'ios' }, { in: 'alta-windows', out: 'windows' }, { in: 'alta', out: 'browser' }];

var jetPath = './src/bower_modules/oraclejet/dist';exports.default = jetAssets;
//# sourceMappingURL=jet.js.map