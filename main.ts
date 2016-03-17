"use strict";

interface FlyBehavior    {
    howToFly: string;
    fly : Function; 
    print : Function;
}

interface QuackBehavior    {
    howToQuack: string;
    Quack : Function; 
    print : Function;
}


class Duck implements FlyBehavior     {
   howToFly: string;
   fly() {
     return "Can I Fly? " + this.howToFly;
   }
   
   print() {
     console.log(this.fly());
   }
   
   constructor(_howToFly:string) {
     this.howToFly = _howToFly;
   }
 
};

var mallard = new Duck( "yes!!!!" );

mallard.print();