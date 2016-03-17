"use strict";

interface FlyBehavior    {
    whichDuck: string;
    howToFly: string;
    fly : Function; 
    print : Function;
}

interface QuackBehavior    {
    whichDuck: string;
    howToQuack: string;
    Quack : Function; 
    print : Function;
}


class Duck implements FlyBehavior     {
   whichDuck: string;
   howToFly: string;
   fly() {
     return "Can a " + this.whichDuck  + " Fly? " + this.howToFly;
   }
   
   print() {
     console.log(this.fly());
   }
   
   constructor(_whichDuck:string, _howToFly:string) {
     this.whichDuck = _whichDuck;
     this.howToFly = _howToFly;
   }
 
};

var mallard = new Duck( "mallard", "yes!!!!" );

mallard.print();