/// <reference path="Duck.ts" />

/*
 * =====================================================================
 * CONCRETE CLASSES: classes that actually get instantiated
 * =====================================================================
 */

// Mallard concrete class
class Mallard extends Duck {
  
  public display(): void {
    
    let setDiv = document.createElement( "div" );
    
    setDiv.setAttribute( "id", this.name );
    return console.log( setDiv );
    
  } 
}

// Class instances
let joe: Duck = new Mallard( new Fly.NoFly(), new Quack.MuteQuack(), "Frankie" );