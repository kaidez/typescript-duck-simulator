"use strict";

/*
 * =====================================================================
 * START BUILDING INTERFACES
 * =====================================================================
 */

// FLY BEHAVIOR
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


/*
 * =====================================================================
 * STOP BUILDING INTERFACES
 * =====================================================================
 */
class Duck {
  
	private flybehavior: FlyBehavior;
  
  constructor(flybehavior: FlyBehavior) {
    this.flybehavior = flybehavior;
  }

  public executeFly(): void {
    this.flybehavior.fly();
  }

}