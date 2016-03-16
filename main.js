"use strict";
var Car = (function () {
    function Car(_model, _year) {
        this.model = _model;
        this.year = _year;
    }
    Car.prototype.toString = function () {
        return this.model + ", " + this.year;
    };
    Car.prototype.print = function () {
        console.log(this.toString());
    };
    return Car;
}());
;
