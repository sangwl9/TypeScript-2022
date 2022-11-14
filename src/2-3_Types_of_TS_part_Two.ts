type Player2 = {
    readonly name: Name;
    age?: Age;
};

const playerMaker2 = (name: string): Player2 => ({ name });
const sangwoo5 = playerMaker2("Sangwoo5");
sangwoo5.age = 12;
//sangwoo5.name = "las"

const numbers: readonly number[] = [1, 2, 3, 4];
//numbers.push(5)

const names: readonly string[] = ["1", "2"];
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
const player5: readonly [string, number, boolean] = ["Sangwoo", 1, true];

// Any can escape typescript's roles
const a2: any[] = [1, 2, 3, 4];
const b2: any = true;
a2 + b2;
