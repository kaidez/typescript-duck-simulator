# GENERAL NOTES

* Is `implements` just stricter than `extends`? Is `implements` better for interface contracts? OR...

* ...use `extends` to have classes inherit from other classes and interfaces but use `implements` to have a classes "inherit" from interfaces?

* use `void` when a property doesn't have a specific type.

* TypeScript can guess types using "type inference." If TypeScript can't determine the type, it assumes it's a generic object, which makes sense since all this is just JavaScript.

* read up on "function overloading".

* read up on "static members".

* in Visual Studio Code, you can either "Go to a Definition" and jump to where your code is referenced or "Peek at a Definition" and see that code from where you are in the IDE.

* TypeScript only injected code when there was class inheritance...it built the `_extends` method in the way described in _JavaScript Web Applications_ by Alex Macaw. Is that still true or does it do other types of code injection?

* edX MIGHT have a free course <a href="https://www.edx.org/course/introduction-typescript-microsoft-dev201x-1">here</a> after April 18th, 2016.  Watch that space!!!!

* importing libraries like jQuery as CommonJS modules doesn't _appear_ to be doable.  AMD may be the only way to use them. But a possible fix for this might be <a href="https://github.com/Microsoft/TypeScript/issues/5285">here</a>. The one <a href="http://stackoverflow.com/questions/13107208/how-can-i-define-a-jquery-object-in-typescript">here</a> also may help.