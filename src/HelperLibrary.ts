/*
 * =====================================================================
 * HelperLibrary: generic methods that help do stuff in other parts of
 * the code. Classes and Interface signatures should NOT go here!!!!!!!!
 * =====================================================================
 */

module HelperLibrary {
  
  /*
   * setDuckElementId(): a method meant to take the "name" parameter
   * passed to a duck instance and then make lowercase first, then
   * remove any whitespace. "name" is represented by the method's
   * "element" paramter
   */
  export function setDuckElementId( element ) {
    return element.toLowerCase().replace(/\s+/g, '');
  }
  
}