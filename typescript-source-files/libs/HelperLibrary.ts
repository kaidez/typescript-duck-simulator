/// <reference path="../classes/Duck.ts" />
/*
 * =====================================================================
 * MODULE: HelperLibrary.ts
 *
 * A few generic methods that help do stuff in other parts of the code.
 * Classes and Interface signatures should NOT go here!!!!!!!!
 * =====================================================================
 */

module HelperLibrary {

  /*
   * setDuckElementId(): a method meant to take the "name" parameter
   * passed to a duck instance and then make lowercase first, then
   * remove any whitespace. "name" is represented by the method's
   * "element" parameter
   */
  export function setDuckElementId( element: string ) {
    return element.toLowerCase().replace( /\s+/g, '' );
  }

  /*
   * buildElements(): add a duck to the web page with DOM manipulation
   */
  export function buildElements( getName, getType ) {

    let targetElement = document.getElementById( "row-container" ),
        documentFragment = document.createDocumentFragment(),
        setDiv = document.createElement( "div" ),
        duckImage = document.createElement( "img" ),
        nameHeader = document.createElement( "p" ),
        typeHeader = document.createElement( "p" ),
        swimElement = document.createElement( "p" ),
        newName = setDuckElementId( getName );

    setDiv.setAttribute( "id", newName );
    setDiv.setAttribute( "class", "duck-container col-md-4" );

    swimElement.setAttribute("id", "isSwim");

    duckImage.setAttribute( "src", "images/redheadDuck.jpg" );

    nameHeader.style.fontWeight = "900";
    nameHeader.innerHTML = getName ;
    typeHeader.innerHTML = "Type: " + getType;


    setDiv.appendChild( duckImage );
    setDiv.appendChild( nameHeader );
    setDiv.appendChild( typeHeader );
    setDiv.appendChild( swimElement );
    documentFragment.appendChild( setDiv );
    targetElement.appendChild( documentFragment );
  }

}