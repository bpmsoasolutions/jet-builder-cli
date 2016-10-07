'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var format = function format(time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
};

var run = function run(fn, options) {
    var task = typeof fn.default === 'undefined' ? fn : fn.default;
    var start = new Date();
    console.log('[' + format(start) + '] Starting \'' + task.name + (options ? '(' + options + ')' : '') + '\'...');

    return task(options).then(function (resolution) {
        var end = new Date();
        var time = end.getTime() - start.getTime();
        console.log('[' + format(end) + '] Finished \'' + task.name + (options ? '(' + options + ')' : '') + '\' after ' + time + ' ms');
        return resolution;
    });
};

exports.default = run;
//# sourceMappingURL=run.js.map