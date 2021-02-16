"use strict";
exports.__esModule = true;
var resistor_color_duo_1 = require("./resistor-color-duo");
var App = /** @class */ (function () {
    function App() {
    }
    App.start = function () {
        var resistorColor = new resistor_color_duo_1.ResistorColor(["yellow", "violet"]);
        console.log(resistorColor.value()); //.toEqual(47)
    };
    return App;
}());
App.start();
