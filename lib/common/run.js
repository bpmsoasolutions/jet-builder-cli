'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
};

var clearLine = function clearLine() {
    _readline2.default.clearLine(process.stdout, 0);
    _readline2.default.cursorTo(process.stdout, 0);
};

var run = function run(fn, options) {
    var task = typeof fn.default === 'undefined' ? fn : fn.default;
    var start = new Date();
    console.log('[' + format(start) + '] Starting \'' + task.name + (options ? '(' + options + ')' : '') + '\'...');

    return task(options).then(function (resolution) {
        var end = new Date();
        var time = end.getTime() - start.getTime();

        clearLine();
        console.log('[' + format(end) + '] Finished \'' + task.name + (options ? '(' + options + ')' : '') + '\' after ' + time + ' ms');
        return resolution;
    });
};

exports.default = run;
//# sourceMappingURL=run.js.map