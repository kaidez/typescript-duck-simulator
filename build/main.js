var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fly;
(function (Fly) {
    /*
     * Create a class that lets "fly()" implement some sort of
     * "FlyWithWings" behavior
     */
    var FlyWithWings = (function () {
        function FlyWithWings() {
        }
        FlyWithWings.prototype.fly = function () {
            return console.log("I'm flying!!");
        };
        return FlyWithWings;
    }());
    Fly.FlyWithWings = FlyWithWings;
    /*
     * Create a class that lets "fly()" implement some sort of "NoFly"
     * behavior
     */
    var NoFly = (function () {
        function NoFly() {
        }
        NoFly.prototype.fly = function () {
            return console.log("I can't fly!!");
        };
        return NoFly;
    }());
    Fly.NoFly = NoFly;
})(Fly || (Fly = {}));
var Quack;
(function (Quack_1) {
    /*
     * Create a class that lets "quack()" implement some sort of
     * "Quack" behavior
     */
    var Quack = (function () {
        function Quack() {
        }
        Quack.prototype.quack = function () {
            return console.log("I'm quacking!!");
        };
        return Quack;
    }());
    Quack_1.Quack = Quack;
    /*
     * Create a class that lets "quack()" implement some sort of
     * "Squeak" behavior
     */
    var Squeak = (function () {
        function Squeak() {
        }
        Squeak.prototype.quack = function () {
            return console.log("I'm squeaking!!");
        };
        return Squeak;
    }());
    Quack_1.Squeak = Squeak;
    /*
     * Create a class that lets "quack()" implement some sort of
     * "MuteQuack" behavior
     */
    var MuteQuack = (function () {
        function MuteQuack() {
        }
        MuteQuack.prototype.quack = function () {
            return console.log("I don't quack!!");
        };
        return MuteQuack;
    }());
    Quack_1.MuteQuack = MuteQuack;
})(Quack || (Quack = {}));
/// <reference path="Fly.ts" />
/// <reference path="Quack.ts" />
/*
 * =====================================================================
 * DUCK CLASS: an abstract class for other ducks inherit from & no more
 * =====================================================================
 */
var Duck = (function () {
    // Define the Duck's constructor function
    function Duck(flybehavior, quackbehavior, name) {
        if (name === void 0) { name = "Anonymous Duck"; }
        this.name = name;
        this.flybehavior = flybehavior;
        this.quackbehavior = quackbehavior;
    }
    /*
     * Call "performFly()" when you want a class instance to implement
     * one of the two "fly" behaviors created earlier
     */
    Duck.prototype.performFly = function () {
        this.flybehavior.fly();
    };
    /*
     * Call "performQuack()" when you want a class instance to implement
     * one of the three "quack" behaviors created earlier
     */
    Duck.prototype.performQuack = function () {
        this.quackbehavior.quack();
    };
    return Duck;
}());
/// <reference path="Duck.ts" />
/*
 * =====================================================================
 * CONCRETE CLASSES: classes that actually get instantiated
 * =====================================================================
 */
// Mallard concrete class
var Mallard = (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        _super.apply(this, arguments);
    }
    Mallard.prototype.display = function () {
        var setDiv = document.createElement("div");
        setDiv.setAttribute("id", this.name);
        return console.log(setDiv);
    };
    return Mallard;
}(Duck));
// Class instances
var joe = new Mallard(new Fly.NoFly(), new Quack.MuteQuack(), "Frankie");
