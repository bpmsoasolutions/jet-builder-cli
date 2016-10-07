"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var textReplace = exports.textReplace = function textReplace(tagStart, tagEnd, replacement, text) {
    if (!tagEnd) {
        tagEnd = tagStart;
    }

    var start = text.indexOf(tagStart);
    var end = text.indexOf(tagEnd);

    var startText = text.slice(0, start);
    var endText = text.slice(end + tagEnd.length, text.length);

    return "" + startText + replacement + endText;
};
//# sourceMappingURL=_utils.js.map