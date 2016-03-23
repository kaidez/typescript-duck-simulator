/// <reference path="classes/Duck.ts" />
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

// Class instances are automatically created on page-load with an IIFE
(function(){

	// Create instances of "Redhead"
	let bobby: Duck = new Redhead( new Fly.NoFly(), new Quack.MuteQuack(), "Bobby" );

  // Run the "display()" method for the Redhead
	bobby.display();



	// Create instances of "Mallard"
	let joe: Duck = new Mallard( new Fly.NoFly(), new Quack.MuteQuack(), "Howard The Duck" );

	// Run the "display()" method for each instance
	joe.display();



	// Create instances of "RubberDuck"
	let john: Duck = new Rubber( new Fly.NoFly(), new Quack.MuteQuack(), "John" );

	// Run the "display()" method for each instance
	john.display();



	// Create instances of "DecoyDuck"
	let james: Duck = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "James" );

	// Run the "display()" method for each instance
	james.display();
})();