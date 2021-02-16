"use strict";
exports.__esModule = true;
exports.isColors = void 0;
var isColors = /** @class */ (function () {
    function isColors(colors) {
        var _this = this;
        this.value = function () { return _this.colors.length; };
        if (!colors) {
            throw new Error("some text");
        }
        this.colors = colors;
    }
    return isColors;
}());
exports.isColors = isColors;
var example = new isColors();
