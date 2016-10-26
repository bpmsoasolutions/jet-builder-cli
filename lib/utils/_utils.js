'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var textReplace = exports.textReplace = function textReplace(tagStart, tagEnd, replacement, text) {
    if (!tagEnd) {
        tagEnd = tagStart;
    }

    var start = text.indexOf(tagStart);
    var end = text.indexOf(tagEnd);

    var startText = text.slice(0, start);
    var endText = text.slice(end + tagEnd.length, text.length);

    return '' + startText + replacement + endText;
};

var argsParser = exports.argsParser = function argsParser(args) {
    return args.reduce(function (last, actual, index, arr) {
        //console.log(last, actual, index, arr)
        var result = {};
        if (actual && actual.indexOf('--') > -1 && actual.indexOf('=') > -1) {
            var cmds = actual.split('=');
            result = _defineProperty({}, cmds[0].replace('--', ''), cmds[1]);
        } else if (actual && actual.indexOf('--') > -1) {
            result = _defineProperty({}, actual.replace('--', ''), true);
        } else {
            result = {};
        }

        return Object.assign(last, result);
    }, {});
};
//# sourceMappingURL=_utils.js.map