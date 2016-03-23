/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * DECOY DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Decoy extends Duck {

  public display(): void {

    let targetElement = document.getElementById( "row-container" ),
        documentFragment = document.createDocumentFragment(),
        setDiv = document.createElement( "div" ),
        duckImage = document.createElement( "img" ),
        nameHeader = document.createElement( "p" ),
        typeHeader = document.createElement( "p" ),
        newName = HelperLibrary.setDuckElementId( this.name );

    setDiv.setAttribute( "id", newName );
    setDiv.setAttribute( "class", "duck-container col-md-4" );

    duckImage.setAttribute( "src", "images/decoyDuck.jpg" );

    nameHeader.style.fontWeight = "900";
    nameHeader.innerHTML = this.name;
    typeHeader.innerHTML = "Type: Decoy Duck";


    setDiv.appendChild( duckImage );
    setDiv.appendChild( nameHeader );
    setDiv.appendChild( typeHeader );
    documentFragment.appendChild( setDiv );
    targetElement.appendChild( documentFragment );

  }

}