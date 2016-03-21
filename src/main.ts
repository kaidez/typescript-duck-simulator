/// <reference path="Duck.ts" />

/*
 * =====================================================================
 * CONCRETE CLASSES: classes that actually get instantiated
 * =====================================================================
 */

// Mallard concrete class
class Mallard extends Duck {
  public display(): void {
    return console.log("I am a Mallard");
  } 
}

// Class instances
let joe: Duck = new Mallard( new Fly.NoFly(), new Quack.MuteQuack() );