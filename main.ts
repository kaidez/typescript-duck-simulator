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


class Duck {
  
	private flybehavior: FlyBehavior;
  
  constructor(flybehavior: FlyBehavior) {
    this.flybehavior = flybehavior;
  }

  public executeFly(): void {
    this.flybehavior.fly();
  }

}