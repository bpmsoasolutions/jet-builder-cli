'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onlys = exports.ignores = exports.presets = exports.plugins = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _path2.default.resolve(__dirname, '../../node_modules');

var plugins = exports.plugins = [base + '/babel-plugin-transform-decorators-legacy', base + '/babel-plugin-add-module-exports', base + '/babel-plugin-transform-es2015-modules-amd'];
var presets = exports.presets = [base + '/babel-preset-es2015', base + '/babel-preset-stage-0'];
var ignores = exports.ignores = ["bower_modules", "require.config.js"];
var onlys = exports.onlys = [];
//# sourceMappingURL=babel.linux.js.map