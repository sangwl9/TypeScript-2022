"use strict";
const playerMaker2 = (name) => ({ name });
const sangwoo5 = playerMaker2("Sangwoo5");
sangwoo5.age = 12;
//sangwoo5.name = "las"
const numbers = [1, 2, 3, 4];
//numbers.push(5)
const names = ["1", "2"];
//names.push("3");
/** Difference between const and readonly in typescript
 * const is similar with readonly
 * they prevent re-assign variables
 * const is block to re-assign while runtime
 * ,but readonly prevents before compile
 * why we use readonly
 * const cannont prevent to re-assign classed and arrays
 * readonly can do it.
 */
// Tuple
const player5 = ["Sangwoo", 1, true];
// Any can escape typescript's roles
const a2 = [1, 2, 3, 4];
const b2 = true;
a2 + b2;
