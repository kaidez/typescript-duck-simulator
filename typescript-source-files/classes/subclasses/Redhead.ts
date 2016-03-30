/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * REDHEAD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Redhead extends Duck {

  public display(): void {

    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}