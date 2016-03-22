/// <reference path="Duck.ts" />
/// <reference path="HelperLibrary.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;

/*
 * =====================================================================
 * MALLARD CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

	public display(): void {

		let targetElement = document.getElementById( "content" ),
				documentFragment = document.createDocumentFragment(),
				setDiv = document.createElement( "div" ),
				nameHeader = document.createElement( "p" ),
				typeHeader = document.createElement( "p" ),
				newName = HelperLibrary.setDuckElementId( this.name );

		setDiv.setAttribute( "id", newName );
		setDiv.setAttribute( "class", "duck-container" );
		nameHeader.innerHTML = this.name;
		typeHeader.innerHTML = "Type: Mallard";
		setDiv.appendChild( nameHeader );
		setDiv.appendChild( typeHeader );
		documentFragment.appendChild( setDiv );
		targetElement.appendChild( documentFragment );

	}

}