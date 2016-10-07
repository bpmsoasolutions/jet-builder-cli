'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ copy [source] [destination] [regex to ignore]

var copyFolders = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var ignore;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);
                        ignore = args[3] ? '--ignore=' + args[3] : '';


                        _shelljs2.default.exec(_path2.default.resolve(_index.pwd, 'node_modules/.bin/ncp') + ' ' + args[0] + ' ' + args[1] + ' ' + ignore);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function copyFolders(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = copyFolders;
//# sourceMappingURL=copyFolders.js.map