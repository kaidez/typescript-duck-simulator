/// <reference path="../Duck.ts" />

/*
 * =====================================================================
 * RUBBER DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Rubber extends Duck {

  public display(): void {

    return console.log("My name is " + this.name +  ". I am a Rubber Duck!!!" );

  }

}