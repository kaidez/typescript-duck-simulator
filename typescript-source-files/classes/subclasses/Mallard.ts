/// <reference path="../Duck.ts" />

/*
 * =====================================================================
 * MALLARD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

  public display(): void {

    return console.log("My name is " + this.name +  ". I am a Mallard Duck!!!" );

  }

}