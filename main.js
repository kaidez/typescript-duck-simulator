"use strict";
var Duck = (function () {
    function Duck(_howToFly) {
        this.howToFly = _howToFly;
    }
    Duck.prototype.fly = function () {
        return "Can I Fly? " + this.howToFly;
    };
    Duck.prototype.print = function () {
        console.log(this.fly());
    };
    return Duck;
}());
;
var mallard = new Duck("yes!!!!");
mallard.print();
