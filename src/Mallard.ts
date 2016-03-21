/// <reference path="Duck.ts" />

/*
 * =====================================================================
 * MALLARD CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

// Mallard concrete class
class Mallard extends Duck {
  
  public display(): void {
    
    let documentFragment = document.createDocumentFragment(),
        setDiv = document.createElement( "div" );
    
    setDiv.setAttribute( "id", this.name );
    documentFragment.appendChild( setDiv );
    
    return console.log( documentFragment );
    
  } 
}