/// <reference path="Duck.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/*
 * =====================================================================
 * CONCRETE CLASSES: classes that actually get instantiated
 * =====================================================================
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
