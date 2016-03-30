/// <reference path="../Duck.ts" />
/// <reference path="../../libs/HelperLibrary.ts" />

/*
 * =====================================================================
 * MALLARD DUCK CLASS: inherits from the core "Duck" class
 * =====================================================================
 */

class Mallard extends Duck {

  public display(): void {

    /*
     * This returns an error because the TypeScript compiler can't
     * really see "this " at this point. But the code works.
     */
    HelperLibrary.buildElements( this.name, this.constructor.name );

  }

}