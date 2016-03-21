/// <reference path="Duck.ts" />

/*
 * =====================================================================
 * MALLARD CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

// Mallard concrete class
class Mallard extends Duck {
  
  public display(): void {
    
    let targetElement = document.getElementById( "content" ),
        documentFragment = document.createDocumentFragment(),
        setDiv = document.createElement( "div" );
    
    setDiv.setAttribute( "id", this.name );
    setDiv.setAttribute( "class", "duck-container" );
    
    documentFragment.appendChild( setDiv );
    targetElement.appendChild( documentFragment );
    
  } 
}