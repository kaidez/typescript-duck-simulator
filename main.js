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
        return "I'm flying!!";
    };
    return FlyWithWings;
}());
var NoFly = (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        return "I can't fly";
    };
    return NoFly;
}());
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        return "I'm flying!!";
    };
    return Quack;
}());
var Squeak = (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        return "I can't fly";
    };
    return Squeak;
}());
var Mute = (function () {
    function Mute() {
    }
    Mute.prototype.quack = function () {
        return "I can't fly";
    };
    return Mute;
}());
/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
var Duck = (function () {
    function Duck(_howToFly) {
        this.howToFly = _howToFly;
    }
    Duck.prototype.fly = function () {
        return "Can a Duck Fly? " + this.howToQuack;
    };
    Duck.prototype.quack = function () {
        return "Can a Duck Fly? " + this.howToQuack;
    };
    Duck.prototype.swim = function () {
        return "I can swim!!";
    };
    Duck.prototype.printProperties = function () {
        console.log(this.fly());
    };
    return Duck;
}());
var Mallard = (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        _super.apply(this, arguments);
    }
    Mallard.prototype.display = function () {
        return "This is what I look like";
    };
    return Mallard;
}(Duck));
var kai = new Mallard("NO!!!!!!!!!");
