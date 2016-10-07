'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _run = require('./common/run');

var _run2 = _interopRequireDefault(_run);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require('../package.json');

var header = '\n' + '    __ _____             _     _      _       _ _   _ _           _ \n' + ' __|  | __  |   ___     |_|___| |_   | |_ _ _|_| |_| | |_ ___ ___| |\n' + '|  |  | __ -|  |___|    | | -_|  _|  | . | | | | | . |  _| . | . | |\n' + '|_____|_____|          _| |___|_|    |___|___|_|_|___|_| |___|___|_|\n' + '                      |___|                                         \n' + ('Version: ' + pkg.version);

var main = exports.main = function main() {
    _commander2.default.version(pkg.version).description(header);

    /*program
        .command('new <folder>')
        .description('Create new project')
        .action(function(folder, options){
            console.log('setting up project on', folder);
        });*/

    _commander2.default.command('run <cmd>').description('Execute the given script').action(function (cmd, options) {
        var localTool = _path2.default.resolve('tool/' + cmd + '.js');
        var globalTool = _path2.default.resolve(__dirname, './scripts/' + cmd + '.js');
        var m = void 0;

        try {
            m = require(localTool).default;
        } catch (error) {
            try {
                m = require(globalTool).default;
            } catch (e) {
                console.error(e.stack);
                console.log('Warn: project ' + error);
                console.log('Warn: global ' + e);
                console.log('Neither local/modules task found...exiting');
                process.exit(0);
            }
        }

        return (0, _run2.default)(m).then(function (a) {
            return console.log(a);
        }).catch(function (err) {
            console.error(err.stack);process.exit(1);
        });
    });

    _commander2.default.command('list').description('List of available scripts').action(function (cmd, options) {
        console.log(header);
        console.log('Scripts list:');
        _shelljs2.default.ls('' + _path2.default.join(__dirname, 'scripts/*.js')).map(function (f) {
            var p = f.split('/');
            console.log(' - ' + p.slice(p.length - 1, p.length));
        });
    });

    _commander2.default.parse(process.argv);
    if (!_commander2.default.args.length) _commander2.default.help();
};
//# sourceMappingURL=cli.js.map