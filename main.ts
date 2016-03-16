"use strict"

/* START INTERFACES */
interface FlyBehavior {
    behavior(): string;
}

interface QuackBehavior {
    behavior(): string;
}
/* STOP INTERFACES */

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

class RubberDuck implements QuackBehavior {
    behavior(): string {
        return "quack";
    }
}

class Decoy implements QuackBehavior {
    behavior(): string {
        return "quack";
    }
}