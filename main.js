"use strict";
var MallardDuck = (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.behavior = function () {
        console.log("fly");
        return;
    };
    return MallardDuck;
}());
var RedheadDuck = (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.behavior = function () {
        return "quack";
    };
    return RedheadDuck;
}());
var kai = new MallardDuck();
