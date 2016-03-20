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
 * CLASSES
 * =====================================================================
 */

/*
 * Create an abstract/base "Duck" class that it will never be directly instantiated.
 */
class Duck {
  
	private flybehavior: FlyBehavior;
  private quackbehavior: QuackBehavior;
  
  constructor( flybehavior: FlyBehavior, quackbehavior: QuackBehavior, public name: string = "Anonymous Duck" ) {
    this.flybehavior = flybehavior;
    this.quackbehavior = quackbehavior;
  }

  public executeFly(): void {
    this.flybehavior.fly();
  }

  public executeQuack(): void {
    this.quackbehavior.quack();
  }
  
  public display(): void {
    return console.log( this.name );
  }
}


// Mallard derived class will go here...


// Class instances
var joe = new Duck( new NoFly(), new MuteQuack() );