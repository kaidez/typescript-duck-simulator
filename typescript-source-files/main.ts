/// <reference path="classes/subclasses/Mallard.ts" />
/// <reference path="classes/subclasses/Redhead.ts" />
/// <reference path="classes/subclasses/Rubber.ts" />
/// <reference path="classes/subclasses/Decoy.ts" />

/*
 * =====================================================================
 * main.ts
 *
 * Code that should be executed in the browser should go here.
 * =====================================================================
 */

// Create instance of a "Decoy"
let joey = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );

// Run the "display()" method for the Redhead
joey.display();