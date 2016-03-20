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
   * Define "flybehavior" and "quackbehavior" instance variables that
   * reference the two behavior classes (FlyBehavior and QuackBehavior)
   * ==================================================================
   * NOTE: the Head First book takes and extra step with these behavior
   * and uses setter methods to make them more dynamic. I didn't do
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

  /*
   * Call "performFly()" when you want a class instance to implement
   * one of the two "fly" behaviors created earlier
   */
  public performFly(): void {
    this.flybehavior.fly();
  }
  
   /*
    * Call "performQuack()" when you want a class instance to implement
    * one of the three "quack" behaviors created earlier
    */
  public performQuack(): void {
    this.quackbehavior.quack();
  }
  
  // Let Duck instances implement the display method however they want
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
let joe: Duck = new Mallard( new NoFly(), new MuteQuack() );