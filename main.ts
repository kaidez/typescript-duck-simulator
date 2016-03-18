"use strict";

/*
 * =====================================================================
 * START BUILDING INTERFACES
 * =====================================================================
 */

// FLY BEHAVIOR
// Encapsulate what varies...like how ducks fly
interface FlyBehavior {
    fly : Function;
}

class FlyWithWings implements FlyBehavior {
    fly() {
	    return "I'm flying!!";
    }
}

class NoFly implements FlyBehavior {
    fly() {
	    return "I can't fly";
    }
}



// QUACK BEHAVIOR
/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
class Duck implements FlyBehavior {
    
    howToFly: string;
  
    fly() {
	    return "Can a Duck Fly? " + this.howToFly;
    }
    
    swim() {
	    return "I can swim!!";
    }
 
    printProperties() {
	    console.log( this.fly() );
    }
    
    constructor(  _howToFly:string ) {
	    this.howToFly = _howToFly;
    }


   
}

class Mallard extends Duck {
    
}

var kai = new Mallard("NO!!!!!!!!!");