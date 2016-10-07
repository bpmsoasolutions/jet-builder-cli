'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var components = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
        var output;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        args = args ? args.split(' ') : process.argv.slice(3, process.argv.length);

                        output = args[0] ? args[0] : 'temp';


                        _shelljs2.default.exec(babelExecPath + ' src --ignore=' + _babel.ignores + ' --source-maps=inline --presets=' + _babel.presets + ' --plugins=' + _babel.plugins + ' --out-dir=' + output);

                        //Also copy the require.config and the html of the templates
                        _context.next = 5;
                        return (0, _index2.default)(_index.copy, '-f src/app/require.config.js ' + _path2.default.join(output, 'app'));

                    case 5:
                        _context.next = 7;
                        return (0, _index2.default)(_index.copyByFound, 'src/**/*.html src ' + output + ' bower_modules');

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function components(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _babel = require('../config/babel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// $ components [output]

var babelExecPath = _path2.default.join('node_modules/.bin/babel');

exports.default = components;
//# sourceMappingURL=components.js.map