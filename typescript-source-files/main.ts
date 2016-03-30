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

// Create instance of a "Redhead"
let stacey = new Redhead( new Fly.NoFly(), new Quack.MuteQuack(), "Stacy" );

// Run the "display()" method for the Redhead
stacey.display();


// Create instance of a "RubberDuck"
let jerrySeinfeld = new Rubber( new Fly.NoFly(), new Quack.MuteQuack(), "Jerry Seinfeld" );

// Run the "display()" method for each instance
jerrySeinfeld.display();

// Create instance of a "Redhead"
let bobby = new Redhead( new Fly.NoFly(), new Quack.MuteQuack(), "Bobby" );

// Run the "display()" method for the Redhead
bobby.display();



// Create instance of a "Mallard"
let joe = new Mallard( new Fly.NoFly(), new Quack.MuteQuack(), "Howard The Duck" );

// Run the "display()" method for each instance
joe.display();
joe.swim();



// Create instance of a "RubberDuck"
let john = new Rubber( new Fly.NoFly(), new Quack.MuteQuack(), "John" );

// Run the "display()" method for each instance
john.display();



// Create instance of a "DecoyDuck"
let james = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "James" );

// Run the "display()" method for each instance
james.display();