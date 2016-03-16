"use strict";
/* STOP INTERFACES */
/* CLASSES */
// Duck Parent Class
/**
 * Duck
 */
var Duck = (function () {
    function Duck(parameters) {
    }
    return Duck;
}());
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
var RubberDuck = (function () {
    function RubberDuck() {
    }
    RubberDuck.prototype.behavior = function () {
        return "quack";
    };
    return RubberDuck;
}());
var Decoy = (function () {
    function Decoy() {
    }
    Decoy.prototype.behavior = function () {
        return "quack";
    };
    return Decoy;
}());
