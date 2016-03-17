"use strict";

interface FlyWithWings    {
    howToFly: string;
    fly : Function; 
    
}

interface NoFly    {
    howToQuack: string;
    quack : Function; 

}

interface FlyBehavior extends FlyWithWings, NoFly {
    whichDuck: string;
    printProperties : Function;
}


class Duck implements FlyBehavior     {
   whichDuck: string;
   howToFly: string;
   howToQuack: string;
   fly() {
     return "Can a " + this.whichDuck  + " Fly? " + this.howToFly;
   }
   
   quack() {
     return "Can a " + this.whichDuck  + " Quack? " + this.howToQuack;
   }
   
   printProperties() {
     console.log(this.fly() );
     console.log( this.quack() );
   }
   
   constructor(_whichDuck:string, _howToFly:string) {
     this.whichDuck = _whichDuck;
     this.howToFly = _howToFly;
   }
 
};

var mallard = new Duck( "mallard", "yes!!!!" );

mallard.printProperties();