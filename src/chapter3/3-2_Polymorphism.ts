type SuperPrint = {
    <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a5 = superPrint([1, 2, 3, 4]);
const b5 = superPrint([true, false, false]);
const c5 = superPrint(["a", "b", "c", "d"]);
const d5 = superPrint([1, 2, true, false, "hello"]);
