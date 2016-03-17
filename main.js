"use strict";
var Duck = (function () {
    function Duck(_whichDuck, _howToFly) {
        this.whichDuck = _whichDuck;
        this.howToFly = _howToFly;
    }
    Duck.prototype.fly = function () {
        return "Can a " + this.whichDuck + " Fly? " + this.howToFly;
    };
    Duck.prototype.quack = function () {
        return "Can a " + this.whichDuck + " Quack? " + this.howToQuack;
    };
    Duck.prototype.printProperties = function () {
        console.log(this.fly());
        console.log(this.quack());
    };
    return Duck;
}());
;
var mallard = new Duck("mallard", "yes!!!!");
mallard.printProperties();
