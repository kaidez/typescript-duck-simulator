/// <reference path="Duck.ts" />
/// <reference path="Mallard.ts" />

/*
 * =====================================================================
 * main.ts
 *
 * Code that should be executed in the browser should go here.
 * =====================================================================
 */

// Class instances are automaically created on page-load with an IIFE
(function(){
	
	// Create instances of "Mallard"
	let joe: Duck = new Mallard( new Fly.NoFly(), new Quack.MuteQuack(), "Howard" );
	
	// Run the "display()" method for each instance
	joe.display();
	
})();