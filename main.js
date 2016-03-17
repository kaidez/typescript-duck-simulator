"use strict";
var Duck = (function () {
    function Duck(_whichDuck, _howToFly) {
        this.whichDuck = _whichDuck;
        this.howToFly = _howToFly;
    }
    Duck.prototype.fly = function () {
        return "Can a " + this.whichDuck + " Fly? " + this.howToFly;
    };
    Duck.prototype.print = function () {
        console.log(this.fly());
    };
    return Duck;
}());
;
var mallard = new Duck("mallard", "yes!!!!");
mallard.print();
