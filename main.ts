"use strict";

/*
 * =====================================================================
 * START BUILDING INTERFACES
 * =====================================================================
 */
interface FlyWithWings {
  howToFly : string;
  fly : Function;
}

interface NoFly {
  howToFly : string;
  fly : Function;
}

interface FlyBehavior extends FlyWithWings, NoFly {
  whichDuck: string;
  printProperties : Function;
}

/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
class Duck implements FlyBehavior {
  whichDuck: string;
  howToFly: string;
  fly() {
	return "Can a " + this.whichDuck  + " Fly? " + this.howToFly;
  }
   
   
   printProperties() {
	 console.log( this.fly() );
   }
   
   constructor( _whichDuck:string, _howToFly:string ) {
	 this.whichDuck = _whichDuck;
	 this.howToFly = _howToFly;
   }
 
};

var mallard = new Duck( "mallard", "yes!!!!" );

mallard.printProperties();