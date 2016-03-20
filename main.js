"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
/*
 * =====================================================================
 * CLASSES
 * =====================================================================
 */
/*
 * Create an abstract/base "Duck" class that it will never be directly
 * instantiated.
 */
var Duck = (function () {
    function Duck(flybehavior, quackbehavior, name) {
        if (name === void 0) { name = "Anonymous Duck"; }
        this.name = name;
        this.flybehavior = flybehavior;
        this.quackbehavior = quackbehavior;
    }
    Duck.prototype.performFly = function () {
        this.flybehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackbehavior.quack();
    };
    return Duck;
}());
// Mallard concrete/derived class will go here...
var Mallard = (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        _super.apply(this, arguments);
    }
    return Mallard;
}(Duck));
// Class instances
var joe = new Mallard(new NoFly(), new MuteQuack());
