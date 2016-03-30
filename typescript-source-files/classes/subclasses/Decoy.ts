/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * DECOY DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Decoy extends Duck {

  public display(): void {
    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}