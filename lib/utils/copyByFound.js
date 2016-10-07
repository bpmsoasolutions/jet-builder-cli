'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// $ copyByFound [regex to find] [source base] [destination base] [regex to omit files found]

var copyByFound = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var files;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        files = _shelljs2.default.ls(args[0]);


                        if (args[3]) {
                            files.filter(function (e) {
                                return e.indexOf(args[3]) < 0;
                            });
                        }

                        files.forEach(function (f) {
                            return copyWithPath(f, args[1], args[2]);
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function copyByFound(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var copyWithPath = function copyWithPath(filePath, sourceBase, destinationBase) {
    var arrFullyPath = filePath.replace(sourceBase, destinationBase).split('/');
    var destArrPath = arrFullyPath.slice(0, arrFullyPath.length - 1);
    var destPath = destArrPath.join('/');

    if (!_shelljs2.default.test('-e', destPath)) {
        destArrPath.reduce(function (last, actual, index, arr) {
            last.push(actual);

            if (_shelljs2.default.test('-e', last.join('/'))) {
                return last;
            }

            _shelljs2.default.mkdir(last.join('/'));
            return last;
        }, []);
    }

    return _shelljs2.default.cp('-Rf', filePath, destPath);
};exports.default = copyByFound;
//# sourceMappingURL=copyByFound.js.map