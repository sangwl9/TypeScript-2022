// use type
type PlayerA = {
    name: string;
};
//inherit type
type PlayerAA = PlayerA & {
    lastName: string;
};
// type PlayerAA = {
//     health: number;
// };
const playerA: PlayerAA = {
    name: "nico",
    lastName: "las",
};

// use interface
interface PlayerB {
    name: string;
}
// inherit interface
interface PlayerBB extends PlayerB {
    lastName: string;
}
interface PlayerBB {
    health: number;
}
const playerB: PlayerBB = {
    name: "nico",
    lastName: "las",
    health: 100,
};
