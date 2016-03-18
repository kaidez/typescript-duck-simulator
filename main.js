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
        return "Can a Duck Fly? " + this.howToFly;
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
    return Mallard;
}(Duck));
var kai = new Mallard("NO!!!!!!!!!");
