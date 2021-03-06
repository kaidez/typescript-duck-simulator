/// <reference path="../Duck.ts" />

/*
 * =====================================================================
 * DECOY DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Decoy extends Duck {

  public display(): void {

    return console.log("My name is " + this.name +  ". I am a Decoy Duck!!!" );

  }

}