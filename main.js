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
/// <reference path="../interfaces/Fly.ts" />
/// <reference path="../interfaces/Quack.ts" />
/*
 * =====================================================================
 * DUCK CLASS: core abstract class for other ducks inherit from
 * =====================================================================
 */
var Duck = (function () {
    // Define the Duck's constructor function
    function Duck(flybehavior, quackbehavior, name) {
        if (name === void 0) { name = "Anonymous"; }
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
    /*
     * Set the swim() method that all ducks have
     */
    Duck.prototype.swim = function () {
        return console.log("I can either swim or float!!!");
    };
    return Duck;
}());
/// <reference path="../Duck.ts" />
/*
 * =====================================================================
 * DECOY DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */
var Decoy = (function (_super) {
    __extends(Decoy, _super);
    function Decoy() {
        _super.apply(this, arguments);
    }
    Decoy.prototype.display = function () {
        return console.log("My name is " + this.name + ". I am a Decoy Duck!!!");
    };
    return Decoy;
}(Duck));
/// <reference path="../Duck.ts" />
/*
 * =====================================================================
 * MALLARD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */
var Mallard = (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        _super.apply(this, arguments);
    }
    Mallard.prototype.display = function () {
        return console.log("My name is " + this.name + ". I am a Mallard Duck!!!");
    };
    return Mallard;
}(Duck));
/// <reference path="../Duck.ts" />
/*
 * =====================================================================
 * REDHEAD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */
var Redhead = (function (_super) {
    __extends(Redhead, _super);
    function Redhead() {
        _super.apply(this, arguments);
    }
    Redhead.prototype.display = function () {
        return console.log("My name is " + this.name + ". I am a Redhead Duck!!!");
    };
    return Redhead;
}(Duck));
/// <reference path="../Duck.ts" />
/*
 * =====================================================================
 * RUBBER DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */
var Rubber = (function (_super) {
    __extends(Rubber, _super);
    function Rubber() {
        _super.apply(this, arguments);
    }
    Rubber.prototype.display = function () {
        return console.log("My name is " + this.name + ". I am a Rubber Duck!!!");
    };
    return Rubber;
}(Duck));
/// <reference path="classes/subclasses/Decoy.ts" />
/// <reference path="classes/subclasses/Mallard.ts" />
/// <reference path="classes/subclasses/Redhead.ts" />
/// <reference path="classes/subclasses/Rubber.ts" />
/*
 * =====================================================================
 * main.ts
 *
 * Code that should run in the browser should go here.
 * =====================================================================
 */
// Create an instance of "Decoy"
var joey = new Decoy(new Fly.NoFly(), new Quack.MuteQuack(), "Joey");
// Run methods for the "joey"
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();
console.log("\n\n");
// Create an instance of a "Mallard"
var tina = new Mallard(new Fly.FlyWithWings(), new Quack.Quack(), "Tina");
// Run methods for the "tina"
tina.display();
tina.performFly();
tina.performQuack();
tina.swim();
console.log("\n\n");
// Create an instance of a "Redhead"
var noName = new Redhead(new Fly.FlyWithWings(), new Quack.MuteQuack());
// Run methods for the "noName"
noName.display();
noName.performFly();
noName.performQuack();
noName.swim();
console.log("\n\n");
// Create an instance of a "Rubber"
var rick = new Rubber(new Fly.NoFly(), new Quack.Squeak(), "Rick");
// Run methods for the "rick"
rick.display();
rick.performFly();
rick.performQuack();
rick.swim();
