let a1: number = 1;
let b1: string = "il";
let c1: boolean = true;
let d1: boolean[] = [true];

// Optinoal Types
const player2: object = {
    name: "Sangwoo",
};
// Typescript doesn't know name in obj
// player2.name

const player3: Player = {
    name: "Sangwoo",
};

if (player3.age && player3.age < 10) {
}

type Player = {
    name: String;
    age?: number;
};

type Age = number;
type Name = string;
type Player1 = {
    name: Name;
    age?: Age;
};

const sangwoo2: Player1 = { name: "Sangwoo2" };
const sangwoo3: Player1 = {
    name: "Sangwoo3",
    age: 31,
};

// function playerMaker(name: string): Player1 {
//     return {
//         name,
//     };
// }

const playerMaker = (name: string): Player1 => ({ name });

const sangwoo4 = playerMaker("Sangwoo4");
sangwoo4.age = 31;
