/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * RUBBER DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Rubber extends Duck {

  public display(): void {

    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}