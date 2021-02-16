"use strict";
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        var _this = this;
        this.value = function () {
            var res = _this.colors.slice(0, 2).reduce(function (acc, c) { return acc + ResistorColor.colorArr.indexOf(c); }, "");
            return Number(res);
        };
        if (!colors || colors.length < 2) {
            throw new Error("At least two colors need to be present");
        }
        this.colors = colors;
    }
    ResistorColor.colorArr = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
var resistorColor = new ResistorColor(["yellow", "violet"]);
console.log(resistorColor.value());
