/// <reference path="Duck.ts" />
/// <reference path="HelperLibrary.ts" />

/*
 * =====================================================================
 * MALLARD CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

	public display(): void {

		let targetElement = document.getElementById( "row-container" ),
				documentFragment = document.createDocumentFragment(),
				setDiv = document.createElement( "div" ),
				duckImage = document.createElement( "img" ),
				nameHeader = document.createElement( "p" ),
				typeHeader = document.createElement( "p" ),
				newName = HelperLibrary.setDuckElementId( this.name );

		setDiv.setAttribute( "id", newName );
		setDiv.setAttribute( "class", "duck-container" );
		nameHeader.innerHTML = this.name;
		typeHeader.innerHTML = "Type: Mallard";
		duckImage.setAttribute("src", "images/mallardDuck.jpg");

		setDiv.appendChild( duckImage );
		setDiv.appendChild( nameHeader );
		setDiv.appendChild( typeHeader );
		documentFragment.appendChild( setDiv );
		targetElement.appendChild( documentFragment );

	}

}