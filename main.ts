"use strict";

/*
 * =====================================================================
 * INTERFACES
 * =====================================================================
 */

// FLY BEHAVIOR INTERFACE
// Encapsulate what varies...like how ducks fly
interface FlyBehavior {
	fly(): void;
}

class FlyWithWings implements FlyBehavior {
	public fly(): void {
		return console.log("I'm flying!!");
	}
}

class NoFly implements FlyBehavior {
	public fly(): void {
		return console.log("I can't fly!!");
	}
}

// QUACK BEHAVIOR INTERFACE
// Encapsulate what varies...like how ducks quack
interface QuackBehavior {
	quack(): void;
}

class Quack implements QuackBehavior {
	public quack(): void {
		return console.log("I'm quacking!!");
	}
}

class Squeak implements QuackBehavior {
	public quack(): void {
		return console.log("I'm squeaking!!");
	}
}

class MuteQuack implements QuackBehavior {
	public quack(): void {
		return console.log("I don't quack!!");
	}
}



/*
 * =====================================================================
 * DUCK ABSTRACT CLASSES: a class meant to be inherited from and no more
 * =====================================================================
 */

abstract class Duck {
  
  /*
   * Define "flybehavior" and "quackbehavior" instance variables
   * ==================================================================
   * NOTE: the Head First book takes and extra step with these behavior
   * and uses setter methods to make them more dynamic.  I didn't do
   * that here because I don't see the need for it. I think
   * JavaScript's natural dynamic nature are more than enough, but
   * please let me know if I'm wrong. 
   */
	private flybehavior: FlyBehavior;
  private quackbehavior: QuackBehavior;
  
  // Define the Duck's constructor function
  constructor( flybehavior: FlyBehavior, quackbehavior: QuackBehavior, public name: string = "Anonymous Duck" ) {
    this.flybehavior = flybehavior;
    this.quackbehavior = quackbehavior;
  }

  public performFly(): void {
    this.flybehavior.fly();
  }

  public performQuack(): void {
    this.quackbehavior.quack();
  }
  
  abstract display(): void;
  
}


/*
 * =====================================================================
 * CONCRETE CLASSES: classes that actually get instantiated
 * =====================================================================
 */

// Mallard concrete class
class Mallard extends Duck {
  
}

// Class instances
var joe = new Mallard( new NoFly(), new MuteQuack() );