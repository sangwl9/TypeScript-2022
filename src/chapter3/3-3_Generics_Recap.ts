type SuperPrint1 = <T, M>(a: T[], b: M) => T;

const superPrint1: SuperPrint1 = (a, b) => a[0];

const a6 = superPrint1([1, 2, 3, 4], "x");
const b6 = superPrint1([true, false, false], 1);
const c6 = superPrint1(["a", "b", "c", "d"], false);
const d6 = superPrint1([1, 2, true, false, "hello"], []);
