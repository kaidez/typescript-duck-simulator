"use strict";
var FlyWithWings = (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        return console.log("I'm flying!!");
    };
    return FlyWithWings;
}());
var NoFly = (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        return console.log("I can't fly!!");
    };
    return NoFly;
}());
/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
var Duck = (function () {
    function Duck(flybehavior) {
        this.flybehavior = flybehavior;
    }
    Duck.prototype.executeFly = function () {
        this.flybehavior.fly();
    };
    return Duck;
}());
