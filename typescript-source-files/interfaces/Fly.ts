module Fly {

  /*
   * ===================================================================
   * INTERFACES
   * Don't define behavoir to any Duck classes, use interfaces to
   * delegate behavoiral responsibility instead.
   * ===================================================================
   */

  /*
   * FLY BEHAVIOR INTERFACE
   * Encapsulate what varies...like the fly() method that's different
   * across all the ducks
   */
  export interface FlyBehavior {
    fly(): void;
  }

  /*
   * Create a class that lets "fly()" implement some sort of
   * "FlyWithWings" behavior
   */
  export class FlyWithWings implements FlyBehavior {
    public fly(): void {
      return console.log("I'm flying!!");
    }
  }

  /*
   * Create a class that lets "fly()" implement some sort of "NoFly"
   * behavior
   */
  export class NoFly implements FlyBehavior {
    public fly(): void {
      return console.log("I can't fly!!");
    }
  }
}