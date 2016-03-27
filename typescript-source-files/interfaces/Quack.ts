module Quack {

	/*
	 * ===================================================================
	 * INTERFACES
	 * Don't define behavoir to any Duck classes, use interfaces to
	 * delegate behavoiral responsibility instead.
	 * ===================================================================
	 */

	/*
	 * QUACK BEHAVIOR INTERFACE
	 * Encapsulate what varies...like the quack() method that's different
	 * across all the ducks
	 */
	export interface QuackBehavior {
		quack(): void;
	}

	/*
	 * Create a class that lets "quack()" implement some sort of
	 * "Quack" behavior
	 */
	export class Quack implements QuackBehavior {
		public quack(): void {
			return console.log( "I'm quacking!!" );
		}
	}

	/*
	 * Create a class that lets "quack()" implement some sort of
	 * "Squeak" behavior
	 */
	export class Squeak implements QuackBehavior {
		public quack(): void {
			return console.log("I'm squeaking!!");
		}
	}

	/*
	 * Create a class that lets "quack()" implement some sort of
	 * "MuteQuack" behavior
	 */
	export class MuteQuack implements QuackBehavior {
		public quack(): void {
			return console.log( "I don't quack!!" );
		}
	}
}