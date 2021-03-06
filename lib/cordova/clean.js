'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var cleanCordova = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(opts) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _del2.default)(['app/platforms/**/*', '!app/platforms/platforms.json', 'app/plugins/**/*', '!app/plugins/fetch.json', 'app/merges/**/*', 'app/www/**/*']);

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function cleanCordova(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = cleanCordova;
//# sourceMappingURL=clean.js.map