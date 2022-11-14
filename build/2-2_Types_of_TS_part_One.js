"use strict";
let a1 = 1;
let b1 = "il";
let c1 = true;
let d1 = [true];
// Optinoal Types
const player2 = {
    name: "Sangwoo",
};
// Typescript doesn't know name in obj
// player2.name
const player3 = {
    name: "Sangwoo",
};
if (player3.age && player3.age < 10) {
}
const sangwoo2 = { name: "Sangwoo2" };
const sangwoo3 = {
    name: "Sangwoo3",
    age: 31,
};
// function playerMaker(name: string): Player1 {
//     return {
//         name,
//     };
// }
const playerMaker = (name) => ({ name });
const sangwoo4 = playerMaker("Sangwoo4");
sangwoo4.age = 31;
