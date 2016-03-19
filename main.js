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
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        return console.log("I'm quacking!!");
    };
    return Quack;
}());
var Squeak = (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        return console.log("I'm squeaking!!");
    };
    return Squeak;
}());
var MuteQuack = (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        return console.log("I don't quack!!");
    };
    return MuteQuack;
}());
var Duck = (function () {
    function Duck(flybehavior, quackbehavior) {
        this.flybehavior = flybehavior;
    }
    Duck.prototype.executeFly = function () {
        this.flybehavior.fly();
    };
    Duck.prototype.executeQuack = function () {
        this.flybehavior.quack();
    };
    return Duck;
}());
