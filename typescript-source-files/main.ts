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
let joey: Decoy = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );

// Run methods for the "joey"
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();
console.log("\n\n");

// Create an instance of a "Decoy"
let tina: Duck = new Mallard( new Fly.FlyWithWings(), new Quack.Quack(), "Tina" );

// Run methods for the "tina"
tina.display();
tina.performFly();
tina.performQuack();
tina.swim();
console.log("\n\n");

// Create an instance of a "Redhead"
let bob = new Redhead( new Fly.FlyWithWings(), new Quack.MuteQuack(), "Bob" );

// Run methods for the "bob"
bob.display();
bob.performFly();
bob.performQuack();
bob.swim();
console.log("\n\n");

// Create an instance of a "Rubber"
let rick: Rubber = new Rubber( new Fly.NoFly(), new Quack.Squeak(), "Rick" );

// Run methods for the "rick"
rick.display();
rick.performFly();
rick.performQuack();
rick.swim();