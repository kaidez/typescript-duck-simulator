/// <reference path="../interfaces/Fly.ts" />
/// <reference path="../interfaces/Quack.ts" />
/// <reference path="../libs/HelperLibrary.ts" />
/// <reference path="../../typings/browser/ambient/jquery/index.d.ts" />

/*
 * =====================================================================
 * DUCK CLASS: core abstract class for other ducks inherit from
 * =====================================================================
 */

abstract class Duck {

  /*
   * Define "flybehavior" and "quackbehavior" instance variables that
   * reference the two behavior classes (FlyBehavior and QuackBehavior)
   * ==================================================================
   * NOTE: the "Head First"" book takes and extra step with these
   * behaviors and uses setter methods to make them more dynamic. I
   * didn't do that here because I don't see the need for it. I think
   * JavaScript's natural dynamic nature are more than enough, but
   * please let me know if I'm wrong.
   */
  private flybehavior: Fly.FlyBehavior;
  private quackbehavior: Quack.QuackBehavior;

  // Define the Duck's constructor function
  constructor( flybehavior: Fly.FlyBehavior, quackbehavior: Quack.QuackBehavior, public name: string = "Anonymous Duck" ) {
    this.flybehavior = flybehavior;
    this.quackbehavior = quackbehavior;
  }

  /*
   * Call "performFly()" when you want a class instance to implement
   * one of the two "fly" behaviors created earlier
   */
  public performFly(): void {
    this.flybehavior.fly();
  }

  /*
   * Call "performQuack()" when you want a class instance to implement
   * one of the three "quack" behaviors created earlier
   */
  public performQuack(): void {
    this.quackbehavior.quack();
  }

  /*
   * Call the swim() method that all ducks have
   */
  public swim(): void {
    var createSwimElement = document.createElement( "p" );

   var newName = HelperLibrary.setDuckElementId(this.name);
   createSwimElement.setAttribute("id", newName + "-swim-info" );
   var target = document.getElementById( newName );
   createSwimElement.innerHTML = "I'm swimming!!!"
   target.appendChild(createSwimElement);

  }

  /*
   * All Duck subclass will have their own unique display() method so
   * define the signature of this method. This means that each subclass
   * MUST have a display() method of some kind or the TypeScript build
   * will break.
   */
  abstract display(): void;

}