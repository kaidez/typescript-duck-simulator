/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * DECOY DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Decoy extends Duck {

  public display(): void {

    /*
     * This returns an error because the TypeScript compiler can't
     * really see "this " at this point. But the code works.
     */
    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}