"use strict"

interface FlyBehavior {
    behavior(): string;
}

interface QuackBehavior {
    behavior(): string;
}

class MallardDuck implements FlyBehavior {
    behavior(): string {
        console.log( "fly");
        return;
    }
}

class RedheadDuck implements QuackBehavior {
    behavior(): string {
        return "quack";
    }
}

var kai = new MallardDuck();