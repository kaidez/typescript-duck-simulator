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
let joey = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );

// Run methods for the "joey"
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();
console.log("\n\n");

// Create an instance of a "Mallard"
let tina = new Mallard( new Fly.FlyWithWings(), new Quack.Quack(), "Tina" );

// Run methods for the "tina"
tina.display();
tina.performFly();
tina.performQuack();
tina.swim();
console.log("\n\n");

// Create an instance of a "Redhead"
let noName = new Redhead( new Fly.FlyWithWings(), new Quack.MuteQuack() );

// Run methods for the "noName"
noName.display();
noName.performFly();
noName.performQuack();
noName.swim();
console.log("\n\n");

// Create an instance of a "Rubber"
let rick = new Rubber( new Fly.NoFly(), new Quack.Squeak(), "Rick" );

// Run methods for the "rick"
rick.display();
rick.performFly();
rick.performQuack();
rick.swim();