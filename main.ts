"use strict"

interface FlyBehavior    {
    model : string;
    year : number;
    toString : Function; 
    print : Function;
}

class Car implements FlyBehavior     {
   model : string;
   year : number;
   toString() {
     return this.model + ", " + this.year;
   }
   
   print() {
     console.log(this.toString());
   }
   
   constructor(_model:string, _year:number) {
     this.model = _model;
     this.year = _year;
   }
   
};