/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * MALLARD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

  public display(): void {

    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}