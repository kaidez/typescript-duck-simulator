/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * MALLARD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

  public display(): void {

    let targetElement = document.getElementById( "row-container" ),
        documentFragment = document.createDocumentFragment(),
        setDiv = document.createElement( "div" ),
        duckImage = document.createElement( "img" ),
        nameHeader = document.createElement( "p" ),
        newName = HelperLibrary.setDuckElementId( this.name ),typeHeader = document.createElement( "p" ),
        swimElement = document.createElement( "p" );

    setDiv.setAttribute( "id", newName );
    setDiv.setAttribute( "class", "duck-container col-md-4" );

    duckImage.setAttribute( "src", "images/mallardDuck.jpg" );

    swimElement.setAttribute( "class", "swim-info" );

    nameHeader.style.fontWeight = "900";
    nameHeader.innerHTML = this.name;
    typeHeader.innerHTML = "Type: Mallard";


    setDiv.appendChild( duckImage );
    setDiv.appendChild( nameHeader );
    setDiv.appendChild( typeHeader );
    setDiv.appendChild( swimElement );
    documentFragment.appendChild( setDiv );
    targetElement.appendChild( documentFragment );
  }

}