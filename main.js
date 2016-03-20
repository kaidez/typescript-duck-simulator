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
    function Duck(flybehavior, quackbehavior, name) {
        this.flybehavior = flybehavior;
        this.quackbehavior = quackbehavior;
        this.name = name;
    }
    Duck.prototype.executeFly = function () {
        this.flybehavior.fly();
    };
    Duck.prototype.executeQuack = function () {
        this.quackbehavior.quack();
    };
    Duck.prototype.display = function () {
        return console.log(this.name);
    };
    return Duck;
}());
