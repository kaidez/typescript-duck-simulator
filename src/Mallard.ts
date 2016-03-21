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
        setDiv = document.createElement( "div" ),
        nameHeader = document.createElement( "p" ),
        typeHeader = document.createElement( "p" ),
        lowerCaseIdName = this.name.toLowerCase();
    
    setDiv.setAttribute( "id", lowerCaseIdName );
    setDiv.setAttribute( "class", "duck-container" );
    nameHeader.innerHTML = this.name;
    typeHeader.innerHTML = "Type: Mallard";
    
    setDiv.appendChild( nameHeader );
    setDiv.appendChild( typeHeader );
    documentFragment.appendChild( setDiv );
    
    targetElement.appendChild( documentFragment );
    
  } 
}