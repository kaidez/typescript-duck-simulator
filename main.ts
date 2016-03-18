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
// Encapsulate what varies...like how ducks quack
interface QuackBehavior {
    quack : Function;
}

class Quack implements QuackBehavior {
    quack() {
	    return "I'm flying!!";
    }
}

class Squeak implements QuackBehavior {
    quack() {
	    return "I can't fly";
    }
}

class Mute implements QuackBehavior {
    quack() {
	    return "I can't fly";
    }
}

/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
class Duck implements FlyBehavior, QuackBehavior {
    
    howToFly: string;
    howToQuack: string;
  
    fly() {
	    return "Can a Duck Fly? " + this.howToQuack;
    }
    
    quack() {
	    return "Can a Duck Fly? " + this.howToQuack;
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