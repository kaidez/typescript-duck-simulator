/// <reference path="../Duck.ts" />

/*
 * =====================================================================
 * REDHEAD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Redhead extends Duck {

  public display(): void {

    return console.log("My name is " + this.name +  ". I am a Redhead Duck!!!" );

  }

}